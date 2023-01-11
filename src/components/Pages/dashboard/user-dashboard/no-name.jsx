import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";

const NoName = () => {
  const {
    state: {
      postTitleUrlTerm: { target_title },
      generatedParagraph,
      generatedHeading,
      projects,
      updateAbove: { oldData, newData },
      loader,
    },
    dispatch,
  } = useAppState();
  const { id } = useParams();
  const { auth } = useAuthState();

  useEffect(() => {
    const projectdomain = projects.find((item) =>
      item.id === id ? item?.domain : "not found"
    );
    const postData = {
      target_title,
      domain: projectdomain.domain,
    };
    fetch("http://192.168.101.4:5000/core/target-headings", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ? `Bearer ${auth}` : "",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "updateAbove", payload: [...data.headings] });
        dispatch({ type: "newUpdateAbove", payload: [...data.headings] });
      });
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
      // console.log(newData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {newData.map((heading, i) => (
        <div key={i}>
          {heading?.generatedHeading && heading?.generatedParagraph && (
            <div className="rounded-md bg-slate-500 mb-4 p-4 text-base-100 ">
              <h2 className="text-2xl mb-4">{heading?.generatedHeading}</h2>
              {heading?.generatedParagraph}
            </div>
          )}

          <div className="p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="flex-inital">{heading.tag}</p>
            <button
              className="flex-none  px-4 py-2 font-semibold text-sm bg-accent-light text-white rounded-full shadow-sm col-start-12"
              onClick={() => handleAbovePost(heading.text)}
            >
              Above This
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoName;
