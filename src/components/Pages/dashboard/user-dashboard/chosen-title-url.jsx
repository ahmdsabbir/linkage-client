import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../../context/AppProvider";

const ChosenTitleUrl = () => {
  const { chooseTitleUrl } = useAppState();
  // setValue func imported as default value
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = chooseTitleUrl.title;
    defaultValues.url = chooseTitleUrl.url;
    reset({ ...defaultValues });
  }, [chooseTitleUrl]);

  const handleChosenTitleURl = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="">
        <h2 className="text-5xl font-semibold text-center mb-5">
          Chosen Title & URL
        </h2>
        <div className="flex items-center justify-center">
          <form
            className="form-control"
            onSubmit={handleSubmit(handleChosenTitleURl)}
          >
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Post title"
                {...register("title")}
              />
            </div>
            <label htmlFor="url">URl</label>
            <input
              type="text"
              disabled
              placeholder="url"
              {...register("url")}
            />
            <div className="form-control mt-6">
              <button
                className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600"
                // to={"/dashboard/project-starter/1/generated-heading"}
              >
                Generate Heading
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChosenTitleUrl;
