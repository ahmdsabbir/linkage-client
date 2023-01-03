import React, { useEffect } from "react";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";

const NoName = () => {
  const {
    defaultHeading,
    setDefaultHeading,
    generatedHeading,
    generatedParagraph,
    updateAbove,
    setUpdateAbove,
  } = useAppState();

  useEffect(() => {
    const getData = async () => {
      const target_url =
        "http://localhost:5173/dashboard/project-starter/1/suggestions";
      try {
        const response = await API.post("/core/update-content", { target_url });

        await setDefaultHeading(response?.data?.headings);
        await setUpdateAbove(response?.data?.headings);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [setDefaultHeading]);

  // post data to the server
  /*  const onSubmit = async (data) => {
    await setTermData(data);
    const postData = {
      target_title,
      relevant_term: data.relevantTerm,
    };

    try {
      const response = await API.post("core/suggestions", postData);
      if (response?.status === 200) {
        await setAiSugetions(response?.data?.suggestions);

        navigate(`/dashboard/project-starter/${id}/suggestions`);
        return;
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }; */

  // udpate the data above the heading on @{}
  const handleAbovePost = async (heading) => {
    try {
      const data = defaultHeading.map((item) =>
        item.title === heading
          ? { ...item, generatedHeading, generatedParagraph }
          : item
      );

      await setUpdateAbove([...data]);
      console.log(updateAbove);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      {updateAbove.map((heading, i) => (
        <div key={i}>
          {heading?.generatedHeading && heading?.generatedParagraph && (
            <div className="rounded-md bg-slate-500 mb-4 p-4 text-base-100 ">
              <h2 className="text-2xl mb-4">{heading?.generatedHeading}</h2>
              {heading?.generatedParagraph}
            </div>
          )}

          <div className="p-4 mb-4 border-2 border-slate-600 rounded-md flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="flex-inital">{heading.title}</p>
            <button
              className="flex-none  px-4 py-2 font-semibold text-sm bg-accent-light text-white rounded-full shadow-sm col-start-12"
              onClick={() => handleAbovePost(heading.title)}
            >
              Above This
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoName;
