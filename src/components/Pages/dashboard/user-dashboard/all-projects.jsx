import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  default as API,
  default as apiConfig,
} from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useRefreshToken from "../../../hook/useRefreshToken";
import ConfirmationModal from "../../../reusable-component/confirmation-modal";
import SingleProjectCard from "../../../reusable-component/single-project-card";
import Spinner from "../../../spinner";
const AllProjects = () => {
  const refresh = useRefreshToken();
  // global state context provider
  const {
    state: { projects, loading },
    dispatch,
    error,
  } = useAppState();
  const { auth, handleLogout } = useAuthState();
  const navigate = useNavigate();

  // state for delete project
  // Set up some additional local state
  const [projectId, setProjectId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const clearAppState = async () => {
    await dispatch({ type: "selectedProject", payload: {} });
    await dispatch({ type: "postTitleUrl", payload: {} });
    await dispatch({ type: "aiSuggestions", payload: [] });
    await dispatch({ type: "choosenTitleUrl", payload: {} });
    await dispatch({ type: "generatedHeading", payload: "" });
    await dispatch({ type: "generatedParagraph", payload: "" });
    await dispatch({ type: "updateAbove", payload: [] });
    await dispatch({ type: "newUpdateAbove", payload: [] });
  };

  useEffect(() => {
    const controller = new AbortController();
    // clearAppState to clear all state of the app
    clearAppState();
    // getting all projects if token is available
    if (auth?.token) {
      const getAllProjects = async () => {
        await dispatch({ type: "loading", payload: true });
        try {
          const response = await apiConfig("api/project", {
            headers: {
              "Content-Type": "application/json",
              Authorization: auth.token ? `Bearer ${auth?.token}` : "",
            },
            // withCredentials: true,
            signal: controller.signal,
          });

          if (response?.status == 200) {
            dispatch({ type: "loading", payload: false });
            await dispatch({
              type: "projects",
              payload: response?.data?.projects,
            });
          } else {
            dispatch({ type: "loading", payload: false });
            toast.error(error?.response?.data?.msg);
          }
        } catch (error) {
          dispatch({ type: "loading", payload: false });

          if (error?.response?.data?.msg) {
            if (error?.response?.data?.msg == "Token has expired") {
              handleLogout();
            } else {
              toast.error(error?.response?.data?.msg);
            }
          } else if (error?.message == "Network Error") {
            toast.error("something went wrong");
          } else {
            if (error.message == "canceled") return;
            toast.error(error.message);
          }
        }
      };

      getAllProjects();
    }

    // stop the request afte the component is unmounted
    return () => {
      controller && controller.abort();
    };
  }, []);

  // start a new project handler
  const handleNewProject = () => {
    navigate("new-project");
  };

  // delete project handler
  const handleDeleteProject = async (Id) => {
    const findProject = await projects.find((project) => project.id == Id);

    try {
      await dispatch({ type: "loading", payload: true });
      const response = await API.delete(`api/project/${findProject.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
      });
      if (response?.status == 200 && response?.data?.msg) {
        await dispatch({ type: "loading", payload: false });
        await dispatch({
          type: "projectDelete",
          payload: projectId,
        });
      } else {
        toast.error(error?.response?.data?.msg);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout();
          toast.error(error?.response?.data?.msg);
        } else {
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast.error("something went wrong");
      } else {
        toast.error(error.message);
      }
    }
    setDisplayConfirmationModal(false);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className=" px-6 gap-6">
            <h2 className="text-5xl font-bold mb-4">All Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projects?.length <= 0 ? (
                <div>
                  <p>No Projects Yet</p>
                  <button className="btn" onClick={handleNewProject}>
                    Create a Project
                  </button>
                </div>
              ) : (
                projects?.map((project) => (
                  <SingleProjectCard
                    key={project.id}
                    name={project.name}
                    domain={project.domain}
                    id={project.id}
                    dateAdded={project.date_added}
                    wpUserName={project.wp_username}
                    wpPassword={project.wp_password}
                    dispatch={dispatch}
                    showModal={setDisplayConfirmationModal}
                    setProjectId={setProjectId}
                    navigate={navigate}
                  />
                ))
              )}
            </div>

            {displayConfirmationModal ? (
              <ConfirmationModal
                showModal={setDisplayConfirmationModal}
                confirmModal={handleDeleteProject}
                projectId={projectId}
                setProjectId={setProjectId}
              />
            ) : null}
          </div>
        </>
      )}
      {/* 
      <button className="btn" onClick={() => refresh()}>
        Refresh Token
      </button> */}
    </>
  );
};

export default AllProjects;
