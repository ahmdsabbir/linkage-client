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
        <div className="p-4">
          <form
            className="grid grid-cols-1 gap-3 mb-2"
            onSubmit={handleSubmit(handleChosenTitleURl)}
          >
            <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
              <label
                htmlFor="title"
                className="label label-text font-medium whitespace-nowrap flex-1 sm:min-w-[85px]"
              >
                Chosen Title
              </label>
              <textarea
                type="text"
                required
                autoFocus
                placeholder="Post title"
                {...register("title")}
                className="textarea focus:outline-none input-bordered w-full"
              />
            </div>
            <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
              <label
                htmlFor="url"
                className="label label-text font-medium whitespace-nowrap flex-1 sm:min-w-[85px]"
              >
                Chosen Url
              </label>
              <textarea
                type="text"
                disabled
                placeholder="url"
                {...register("url")}
                className="textarea focus:outline-none input-bordered align-middle w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 ">
              <div className=" whitespace-nowrap order-2 md:order-1 sm:min-w-[85px]"></div>
              <div className="order-1 md:order-2">
                <button className="btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded">
                  Generate Heading
                </button>
                <p className="text-black/60 text-sm">
                  Remember, You can always regenerate!
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChosenTitleUrl;
