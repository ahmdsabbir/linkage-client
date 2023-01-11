import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useAxiosPrivate from "../../../hook/useAxiosPrivate";
import useRefreshToken from "../../../hook/useRefreshToken";
import SingleProjectCard from "../../../reusable-component/single-project-card";
import Spinner from "../../../spinner";

const AllProjects = () => {
  // global state context provider
  const {
    state: { projects, loading },
    dispatch,
  } = useAppState();
  const { auth, setAuth } = useAuthState();
  const refresh = useRefreshToken();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    if (auth) {
      const getAllProjects = async () => {
        try {
          const response = await API("/project", {
            headers: {
              "Content-Type": "application/json",
              Authorization: auth ? `Bearer ${auth}` : "",
            },
          });
          isMounted &&
            dispatch({
              type: "projects",
              payload: response?.data?.projects,
            });
        } catch (error) {
          console.log("AllProjects", error);
        }
      };

      getAllProjects();
    }

    // stop the request afte the data is mounted
    return () => {
      (isMounted = false), controller.abort();
    };
  }, [auth]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-6 gap-6">
          {!projects?.length > 0
            ? "No Projects Yet"
            : projects?.map((project, i) => (
                <SingleProjectCard
                  key={project.id}
                  name={project.name}
                  domain={project.domain}
                  id={project.id}
                  dateAdded={project.date_added}
                  wpPassword={project.wp_password}
                />
              ))}
        </div>
      )}

      <button className="btn" onClick={() => refresh()}>
        refresh
      </button>
    </>
  );
};

export default AllProjects;
