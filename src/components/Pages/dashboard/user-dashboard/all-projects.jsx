import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const { auth, setAuth } = useAuthState();
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
        await dispatch({ type: "loading", payload: false });
        try {
          const response = await apiConfig("/project", {
            headers: {
              "Content-Type": "application/json",
              Authorization: auth.token ? `Bearer ${auth?.token}` : "",
              withCredentials: true,
            },
            signal: controller.signal,
          });

          if (response?.status == 200) {
            await dispatch({
              type: "projects",
              payload: response?.data?.projects,
            });
            await dispatch({ type: "loading", payload: false });
          } else {
            await dispatch({ type: "loading", payload: false });
            toast.error(error?.response?.data?.msg);
          }
        } catch (error) {
          dispatch({ type: "loading", payload: false });
          if (error?.response?.data?.msg) {
            toast.error(error?.response?.data?.msg);
          } else if (error?.message == "Network Error") {
            toast.error(error.message);
          } else {
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

  // start a new projecct handler
  const handleNewPorject = () => {
    navigate("new-project");
  };

  // delete projct handler
  const handleDeleteProject = async (Id) => {
    const findProject = await projects.find((project) => project.id == Id);

    try {
      await dispatch({ type: "loading", payload: true });
      const response = await API.delete(`project/${findProject.id}`, {
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
        console.log(response);
        toast.error(error?.response?.data?.msg);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error?.response?.data?.msg) {
        toast.error(error?.response?.data?.msg);
      } else if (error?.message == "Network Error") {
        toast.error(error.message);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-6">
            {projects?.length <= 0 ? (
              <div>
                <p>No Projects Yet</p>
                <button className="btn" onClick={handleNewPorject}>
                  Start A New Porject
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
            <ToastContainer />
          </div>
          {error && <p className="text-red-700 ">{error}</p>}

          {displayConfirmationModal ? (
            <ConfirmationModal
              showModal={setDisplayConfirmationModal}
              confirmModal={handleDeleteProject}
              projectId={projectId}
              setProjectId={setProjectId}
            />
          ) : null}
        </>
      )}

      <button className="btn" onClick={() => refresh()}>
        Refresh Token
      </button>
    </>
  );
};

export default AllProjects;
