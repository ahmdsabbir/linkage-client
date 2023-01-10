import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  /* let token = ''
  useEffect(() => {
     token = auth
  }, [auth, setAuth, token]); */


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    if(auth["x-access-token"]) {
    const getData = async () => {
      
      try {
      console.log(auth["x-access-token"])  
        const fetchdData = await fetch('http://192.168.101.4:5000/project', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth["x-access-token"]}`,
          }
        });
        // const data = await fetchdData.json()
  
          console.log(fetchdData)
          isMounted &&
            (await dispatch({
              type: "projects",
              payload: fetchdData,
            }));
          // dispatch({ type: "loading", loading: !loading });
        } catch (error) {
          console.log(error);
          // dispatch({ type: "loading", loading: !loading });
          navigate("/login", { state: { from: location }, replace: true });
        }
   
    };
    getData();

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
                  key={project.name}
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
