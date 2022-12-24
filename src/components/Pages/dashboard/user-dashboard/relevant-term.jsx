import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../../../../api/api-config";
import { globalData } from "../../../context/Provider";

const RelevantTerm = () => {
  const { register, handleSubmit } = useForm();
  const { setTermData, termData, userData: postTitle } = globalData();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newdata = { ...data, postTitle };
    console.table(newdata);
    navigate("project-starter/suggestions");
    const response = await API.post("/posts", newdata);
    if (response?.status === 201) {
      // navigate("project-starter/suggestions");
    }
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
          <div className="card-body flex-row">
            <label className="label self-start">
              <span className="label-text text-2xl font-bold">
                Enter Relevent Term
              </span>
            </label>
            <div className="form-control gap-4 flex-1">
              <input
                type="text"
                placeholder="relevent term"
                className="input input-bordered "
                {...register("releventTerm", { required: true, maxLength: 20 })}
              />
              <div className="form-control inline-block">
                <button
                  type="submit"
                  className="btn btn-primary border-gray-600"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RelevantTerm;
