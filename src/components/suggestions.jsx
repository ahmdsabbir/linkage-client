import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../api/api-config";
import { globalData } from "./context/Provider";
import ProjectDetails from "./reusable-component/project-details";
import SuggestionsCard from "./reusable-component/suggestion-card";

const Suggestions = () => {
  const { register, handleSubmit } = useForm();
  const { setUserData } = globalData();
  const navigate = useNavigate();

  // post request

  const onSubmit = async (data) => {
    const newdata = { ...data, term: "term" };
    const response = await API.post("/posts", {
      newdata,
    });
    await setUserData(response?.data);
    console.log(response);
  };
  return (
    <div className="">
      <h1 className="text-5xl font-bold">Enter Post Dashboard</h1>
      <ProjectDetails />
      <div className="hero-content flex-col">
        {/* divider */}
        <div className="divider"></div>

        {/* serach for more new term form form */}
        <div>
          <p className="text-4xl text-center px-6 mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
              <div className="card-body flex-row">
                <label className="label self-start">
                  <span className="label-text text-2xl font-bold">
                    Search For More Suggestions
                  </span>
                </label>
                <div className="form-control gap-4 flex-1">
                  <input
                    type="text"
                    placeholder="post title here"
                    className="input input-bordered "
                    {...register("newTerm", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                  <div className="form-control inline-block">
                    <button className="btn btn-primary border-gray-600">
                      Generate Suggestion Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            {/* generate heading */}
            <form className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-full-name"
                  >
                    chosen Title
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="input input-bordered w-full"
                    type="text"
                    // value="Jane Doe"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                    htmlFor="inline-password"
                  >
                    Url
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="input input-bordered w-full"
                    id="url"
                    type="text"
                    placeholder="url"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="btn btn-primary border-gray-600"
                    type="button"
                  >
                    Generate Heading
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* suggestions generated from api call */}
          <div>
            <SuggestionsCard />
            <SuggestionsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
