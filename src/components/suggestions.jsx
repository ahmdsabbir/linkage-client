import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
    navigate("/relevent");
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
                    <button className="btn btn-primary">
                      Generate Suggestion Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2">
          <div>
            {/* generate heading */}
            <form>
              <div className="flex flex-1 items-center gap-5 mb-5">
                <label htmlFor="chosen title">Chosen Title</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered max-w-xs"
                />
              </div>
              <div className="flex flex-1  gap-5">
                <label htmlFor="chosen title self-start ">Chosen Url</label>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered max-w-xs mb-4"
                  />
                  <div className="form-control inline-block">
                    <button className=" btn btn-primary">
                      Generate Suggestion Again
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div>
            {/* suggestions */}
            <SuggestionsCard />
            <SuggestionsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
