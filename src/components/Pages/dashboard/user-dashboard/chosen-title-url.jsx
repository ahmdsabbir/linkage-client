import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";

const ChosenTitleUrl = () => {
  const {
    userPostTitle: { postTitle: target_title },
    chooseTitleUrl,
    setGeneratedHeading,
  } = useAppState();

  // setValue func imported as default value
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = chooseTitleUrl.title;
    defaultValues.url = chooseTitleUrl.url;
    reset({ ...defaultValues });
  }, [chooseTitleUrl]);

  const handleChosenTitleURl = async (data) => {
    data;

    const postData = {
      target_title,
      source_title: data.title,
    };

    try {
      const response = await API.post("core/heading", postData);
      if (response?.status === 200) {
        await setGeneratedHeading(response?.data?.heading);
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="">
        <h2 className="text-xl font-semibold text-center mb-5">
          Chosen Title & URL
        </h2>
        <div className="p-4">
          <form
            className="form-control gap-3 mb-2"
            onSubmit={handleSubmit(handleChosenTitleURl)}
          >
            <div className="form-control">
              <label htmlFor="title" className="label label-text">
                Title
              </label>
              <textarea
                type="text"
                required
                placeholder="Post title"
                {...register("title")}
                className="textarea"
              />
            </div>
            <div className="form-control">
              <label htmlFor="url" className="label label-text">
                URl
              </label>
              <textarea
                type="text"
                disabled
                placeholder="url"
                {...register("url")}
                className="textarea"
              />
            </div>

            <div className="card-actions justify-center mt-6">
              <button className="btn bg-accent-dark border-none">
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
