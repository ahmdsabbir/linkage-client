import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import Spinner from "../../../spinner";

const NoName = () => {
  const {
    state: {
      postTitleUrlTerm: { target_url },
      generatedParagraph,
      generatedHeading,
      projects,
      updateAbove: { oldData, newData },
      loading,
      error,
    },
    dispatch,
  } = useAppState();
  const { id } = useParams();
  const { auth } = useAuthState();

  useEffect(() => {
    const projectdomain = projects.find((item) => item.id == id);

    // console.table({ target_url, domain: projectdomain.domain });

    const postData = JSON.stringify({
      target_url,
      domain: projectdomain.domain,
    });

    console.table({ target_url, domain: projectdomain.domain });
    const getData = async () => {
      dispatch({ type: "error", payload: "" });
      dispatch({ type: "loading" });
      await dispatch({
        type: "updateAbove",
        payload: [],
      });
      await dispatch({
        type: "newUpdateAbove",
        payload: [],
      });
      try {
        const response = await API.post("core/target-headings", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.token ? `Bearer ${auth?.token}` : "",
          },
          withCredentials: "true",
        });
        console.log(response);
        if (response?.status === 200) {
          await dispatch({
            type: "updateAbove",
            payload: [...response?.data?.headings],
          });
          await dispatch({
            type: "newUpdateAbove",
            payload: [...response?.data?.headings],
          });
        }
      } catch (error) {
        dispatch({ type: "loading", payload: !loading });
        if (!error?.response) {
          dispatch({ type: "error", payload: error?.message });
        } else if (error?.status == 400 || error?.status == 401) {
          dispatch({ type: "error", payload: "missing username or password" });
        } else if (error?.message == "Network Error") {
          dispatch({ type: "error", payload: error?.message });
        } else {
          dispatch({ type: "error", payload: "server error" });
        }
      }
    };

    //  calling the function
    getData();
  }, []);

  // udpate the data above the heading on @{}
  const handleAbovePost = async (heading) => {
    try {
      const newUpdateAbove = oldData.map((item) =>
        item.text === heading
          ? { ...item, generatedHeading, generatedParagraph }
          : item
      );
      dispatch({ type: "newUpdateAbove", payload: newUpdateAbove });
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({ type: "error", payload: error?.message });
      } else if (error?.status == 400 || error?.status == 401) {
        dispatch({ type: "error", payload: "missing username or password" });
      } else if (error?.message == "Network Error") {
        dispatch({ type: "error", payload: error?.message });
      } else {
        dispatch({ type: "error", payload: "server error" });
      }
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
        <div>
          {newData.map((heading, i) => (
            <div key={i}>
              {heading?.generatedHeading && heading?.generatedParagraph && (
                <div className="rounded-md bg-slate-500 mb-4 p-4 text-base-100 ">
                  <h2 className="text-2xl mb-4">{heading?.generatedHeading}</h2>
                  {heading?.generatedParagraph}
                </div>
              )}
              {heading.name == "h2" ? (
                <div className="p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="flex-inital font-medium">{heading.text}</p>
                  <button
                    className="flex-none px-4 py-2 font-semibold text-sm bg-accent-light text-white rounded-full shadow-sm col-start-12"
                    onClick={() => handleAbovePost(heading.text)}
                  >
                    Above This
                  </button>
                </div>
              ) : (
                <div className="ml-8 p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="flex-inital font-semibold">{heading.text}</p>
                  <button
                    className="flex-none  px-4 py-2 font-semibold text-sm bg-accent-light text-white rounded-full shadow-sm col-start-12"
                    onClick={() => handleAbovePost(heading.text)}
                  >
                    Above This
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* generated Section */}
        <div className="lg:col-start-2">
          <div className="mb-4">
            <h2 className="text-3xl">Generated Section</h2>
            {error && <p className="text-red-800 font-medium">{error}</p>}
            <p className="text-slate-400">
              Following Section was Generated. Insert It Wherever You’d like on
              Your Post
            </p>
          </div>
          <div className="rounded text-base-100 bg-slate-500 mb-4 p-4 ">
            <h2 className="text-2xl mb-4">{generatedHeading}</h2>
            <hr></hr>
            {generatedParagraph && generatedParagraph}
          </div>
          <div className=" self-start flex-1 order-1 md:order-1">
            <button className="btn bg-contrast border-none rounded text-white">
              Update to the site
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default NoName;
