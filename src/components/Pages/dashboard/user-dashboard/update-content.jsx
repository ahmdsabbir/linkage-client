import React, { useEffect } from "react";
import { toast } from "react-toastify";
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
    },
    dispatch,
  } = useAppState();

  const { auth, handleLogout } = useAuthState();

  useEffect(() => {
    const postData = JSON.stringify({
      post_id: choosenTitleUrl.id,
      domain: selectedProject.domain,
    });

    const getData = async () => {
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

        const response = await API.post("core/target-headings", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.token ? `Bearer ${auth?.token}` : "",
          },
          // withCredentials: "true",
        });

        if (response?.status == 200 && !response?.data?.msg) {
          await dispatch({ type: "loading", payload: false });

          await dispatch({
            type: "updateAbove",
            payload: [...response?.data?.headings],
          });
          await dispatch({
            type: "newUpdateAbove",
            payload: [...response?.data?.headings],
          });
        } else {
          await dispatch({ type: "loading", payload: false });
          toast.warning(
            response?.data?.msg ? response?.data?.msg : "Something went wrong"
          );
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
    };

    //  calling the function
    getData();
  }, []);

  // udpate the data above the heading on @{}
  const handleAbovePost = async (heading) => {
    try {
      dispatch({ type: "loading", payload: false });
      const newUpdateAbove = await oldData.map((item) =>
        item.text == heading
          ? { ...item, generatedHeading, generatedParagraph }
          : item
      );
      await dispatch({ type: "newUpdateAbove", payload: newUpdateAbove });
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
        toast("something went wrong");
      } else {
        toast(error.message);
      }
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
      dispatch({ type: "loading", payload: true });
      const response = await API.post("core/update-content", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: "true",
      });
      if (response.status == 200 || response.status == 201) {
        dispatch({ type: "loading", payload: false });
        toast.success(response?.data?.msg);
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
        toast("something went wrong");
      } else {
        toast.error(error.message);
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
                <div
                  className={`${
                    heading.name == "h3" && "ml-2 sm:ml-4 md:ml-8 p-4 mb-4"
                  } text-accent-dark mb-2 rounded border border-accent-dark/20 p-4 bg-accent-dark/5`}
                >
                  <h2 className=" font-semibold mb-2 ">
                    {heading?.generatedHeading}
                  </h2>
                  {heading?.generatedParagraph}
                </div>
              )}

              {heading.name == "h2" ? (
                <div
                  className={` p-4 mb-4 border rounded-md flex flex-col md:flex-row gap-4 items-center md:items-start  justify-between border-accent-dark/20 `}
                >
                  <p className="flex-inital font-medium  text-accent-dark ">
                    {heading.text}
                  </p>

                  <div
                    className="tooltip hover:tooltip-open tooltip-right"
                    data-tip="Insert the generated section above this <h2> in your original post"
                  >
                    <button
                      className="flex-none  w-full sm:w-auto px-4 py-2 font-semibold text-sm  border-accent-dark/20 text-white rounded-full shadow-sm col-start-12"
                      onClick={() => handleAbovePost(heading.text)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#667793"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="ml-2 sm:ml-4 md:ml-8 p-4 mb-4 border border-accent-dark/20 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="flex-inital  text-accent-dark font-medium">
                    {heading.text}
                  </p>

                  <div
                    className="tooltip hover:tooltip-open tooltip-right"
                    data-tip="Insert the generated section above this <h3> in your original post"
                  >
                    <button
                      className="flex-none  w-full sm:w-auto px-4 py-2 font-semibold text-sm  border text-white rounded-full shadow-sm col-start-12"
                      onClick={() => handleAbovePost(heading.text)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#667793"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* generated Section */}
        <div className="lg:col-start-2 relative">
          <div className="sticky top-0">
            <div className="mb-4">
              <h2 className="text-3xl text-accent-dark">Generated Section</h2>

              <p className="text-slate-400">
                Following Section was Generated. Insert It Wherever You’d like
                on Your Post
              </p>
            </div>
            <div className="rounded border border-accent-dark/20 text-accent-dark bg-accent-dark/5 mb-4 p-4 ">
              <h2 className="font-semibold mb-4">{generatedHeading}</h2>
              <hr className=" mb-2"></hr>
              {generatedParagraph && generatedParagraph}
            </div>
            <div className=" self-start flex-1 order-1 md:order-1">
              <button
                className="btn w-full sm:w-auto bg-contrast border-none rounded text-white capitalize"
                onClick={handleUdpateToTheSite}
              >
                Update post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UpdateContent;
