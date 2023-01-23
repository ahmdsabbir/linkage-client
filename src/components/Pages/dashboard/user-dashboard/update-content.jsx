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
      error,
    },
    dispatch,
  } = useAppState();

  const { auth } = useAuthState();

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

        if (response?.status === 200 && !response?.data?.msg) {
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
          toast.info(
            response?.data?.msg ? response?.data?.msg : "Something went wrong"
          );
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

    //  calling the function
    getData();
  }, []);

  // udpate the data above the heading on @{}
  const handleAbovePost = async (heading) => {
    try {
      const newUpdateAbove = await oldData.map((item) =>
        item.text == heading
          ? { ...item, generatedHeading, generatedParagraph }
          : item
      );
      await dispatch({ type: "newUpdateAbove", payload: newUpdateAbove });
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
        toast.error(error?.response?.data?.msg);
      } else if (error?.message == "Network Error") {
        toast.error(error.message);
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
                  }  p-4 mb-4 border-2 rounded-md flex flex-col gap-4 items-center   bg-slate-500  text-base-100 `}
                >
                  <h2 className="text-2xl">{heading?.generatedHeading}</h2>
                  {heading?.generatedParagraph}
                </div>
              )}
              {heading.name == "h2" ? (
                <div className="p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="flex-inital ">{heading.text}</p>
                  <button
                    className="flex-none px-4 py-2 font-semibold text-sm bg-accent-light text-white rounded-full shadow-sm col-start-12"
                    onClick={() => handleAbovePost(heading.text)}
                  >
                    Above This
                  </button>
                </div>
              ) : (
                <div className="ml-2 sm:ml-4 md:ml-8 p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="flex-inital ">{heading.text}</p>
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
        <div className="lg:col-start-2 relative">
          <div className="sticky top-0">
            <div className="mb-4">
              <h2 className="text-3xl">Generated Section</h2>

              <p className="text-slate-400">
                Following Section was Generated. Insert It Wherever You’d like
                on Your Post
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
        </div>
      </div>
    );
  }
};

export default UpdateContent;
