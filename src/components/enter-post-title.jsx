import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../api/api-config";
import { globalData } from "./context/Provider";

const EnterPostTitle = () => {
  const { register, handleSubmit } = useForm();
  const { setUserData } = globalData();
  const navigate = useNavigate();

  // post request

  const onSubmit = async (data) => {
    const response = await API.post("/posts", {
      data,
    });
    if (response.status === 201) {
      await setUserData(response?.data);
      navigate("/relevent");
    }
    console.log(response);
  };

  return (
    <div className="">
      <h1 className="text-5xl font-bold">Enter Post Dashboard</h1>
      <div className="card flex-shrink-0 w-full max-w-5xl">
        <div className="card-body gap-4 text-center md:text-left ">
          <div className="flex items-center gap-4 font-medium">
            <h1 className="text-xl">Project Domain:</h1>
            <p className="py-6 text-lg">google.com</p>
          </div>
        </div>
      </div>
      <div className="hero-content flex-col">
        <div className="divider"></div>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
            <div className="card-body flex-row">
              <label className="label self-start">
                <span className="label-text text-2xl font-bold">
                  Enter Post Title
                </span>
              </label>
              <div className="form-control gap-4 flex-1">
                <input
                  type="text"
                  placeholder="post title here"
                  className="input input-bordered "
                  {...register("postTitle", { required: true, maxLength: 20 })}
                />
                <div className="form-control inline-block">
                  <button type="submit" className="btn btn-primary">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterPostTitle;
