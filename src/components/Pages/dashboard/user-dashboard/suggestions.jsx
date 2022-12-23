import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../../../../api/api-config";
import { globalData } from "../../../context/Provider";
import ProjectDetails from "../../../reusable-component/project-details";
import SuggestionsCard from "../../../reusable-component/suggestion-card";
import ChosenTitleUrl from "./chosen-title-url";

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
        <div className="mb-10">
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
          <div className="card bg-base-100 shadow-xl">
            {/* generate heading */}
            <ChosenTitleUrl />
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
