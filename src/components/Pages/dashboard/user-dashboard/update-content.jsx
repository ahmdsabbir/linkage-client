import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import Spinner from "../../../spinner";

const UpdateContent = () => {
  const {
    state: {
      postTitleUrlTerm,
      generatedParagraph,
      generatedHeading,
      selectedProject,
      choosenTitleUrl,
      updateAbove: { oldData, newData },
      loading,
      error,
    },
    dispatch,
  } = useAppState();
  const { name } = useParams();
  const { auth } = useAuthState();

  useEffect(() => {
    const postData = JSON.stringify({
      post_id: choosenTitleUrl.id,
      domain: selectedProject.domain,
    });

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
        await dispatch({ type: "loading", payload: true });
        await dispatch({ type: "error", payload: "" });
        const response = await API.post("core/target-headings", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.token ? `Bearer ${auth?.token}` : "",
          },
          withCredentials: "true",
        });

        if (response?.status === 200 && !response?.data?.msg) {
          await dispatch({ type: "loading", payload: false });
          await dispatch({ type: "error", payload: "" });
          await dispatch({
            type: "updateAbove",
            payload: [...response?.data?.headings],
          });
          await dispatch({
            type: "newUpdateAbove",
            payload: [...response?.data?.headings],
          });
        } else {
          dispatch({ type: "error", payload: response?.data?.msg });
        }
      } catch (error) {
        dispatch({ type: "loading", payload: !loading });
        if (!error?.response) {
          dispatch({ type: "error", payload: error?.message });
        } /* else if (error.response.status == 401) {
          await dispatch({ type: "loading", payload: false });
          await setAuth({});
          localStorage.clear();
          // navigate("/login", { state: { from: location }, replace: true });
          dispatch({
            type: "error",
            payload: "Your session has been expired. Please login again.",
          });
          navigate("/login");
        } */ else if (error?.response?.data.msg) {
          dispatch({ type: "error", payload: error?.response?.data.msg });
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
      const newUpdateAbove = await oldData.map((item) =>
        item.text === heading
          ? { ...item, generatedHeading, generatedParagraph }
          : item
      );
      await dispatch({ type: "newUpdateAbove", payload: newUpdateAbove });
    } catch (error) {
      await dispatch({ type: "loading", payload: !loading });
      await dispatch({ type: "error", payload: "server error" });
    }
  };

  const handleUdpateToTheSite = async () => {
    const tagText = newData.find(
      (item) => item.generatedParagraph === generatedParagraph
    );

    const postData = JSON.stringify({
      domain: selectedProject.domain,
      post_id: choosenTitleUrl.id,
      combined_heading: generatedHeading,
      paragraph_content: generatedParagraph,
      chosen_heading_text: tagText.text,
      chosen_heading_tag: tagText.tag,
    });

    try {
      dispatch({ type: "error", payload: "" });
      dispatch({ type: "loading", payload: true });
      const response = await API.post("core/update-content", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: "true",
      });
      if (response.status == 200 || response.status == 201) {
        dispatch({ type: "error", payload: "" });
        dispatch({ type: "loading", payload: false });
        console.log(response);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({ type: "error", payload: error?.message });
      } else if (error?.response?.data.msg) {
        dispatch({ type: "error", payload: error?.response?.data.msg });
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
                <div className="ml-2 sm:ml-4 md:ml-8 p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
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
            <button
              className="btn bg-contrast border-none rounded text-white"
              onClick={handleUdpateToTheSite}
            >
              Update to the site
            </button>
          </div>
        </div>
        {error && <p className="text-5xl font-medium">{error}</p>}
      </div>
    );
  }
};

export default UpdateContent;
