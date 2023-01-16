import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import SingleProjectCard from "../../../reusable-component/single-project-card";
import Spinner from "../../../spinner";

const AllProjects = () => {
  // global state context provider
  const {
    state: { projects, loading },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    if (auth?.token) {
      const getAllProjects = async () => {
        try {
          const response = await API("/project", {
            headers: {
              "Content-Type": "application/json",
              Authorization: auth.token ? `Bearer ${auth?.token}` : "",
            },
          });

          if (isMounted && response?.status == 200 && !response?.data?.msg) {
            await dispatch({
              type: "projects",
              payload: response?.data?.projects,
            });
            await dispatch({ type: "error", payload: "" });
          } else {
            await dispatch({ type: "error", payload: response?.data?.msg });
          }
        } catch (error) {
          dispatch({ type: "loading", payload: !loading });
          if (!error?.response) {
            dispatch({ type: "error", payload: error?.message });
          } else if (error?.status == 400 || error?.status == 401) {
            dispatch({
              type: "error",
              payload: "missing username or password",
            });
          } else if (error?.message == "Network Error") {
            dispatch({ type: "error", payload: error?.message });
          } else {
            dispatch({ type: "error", payload: error?.message });
          }
        }
      };

      getAllProjects();
    }

    // stop the request afte the data is mounted
    return () => {
      (isMounted = false), controller.abort();
    };
  }, [auth]);

  // start a new projecct handler
  const handleNewPorject = () => {
    navigate("new-project");
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-6">
          {!projects?.length > 0 ? (
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
                wpPassword={project.wp_password}
                dispatch={dispatch}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default AllProjects;
