import React from "react";

const EnterPostTitle = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold">Enter Post Dashboard</h1>
      <div className="card flex-shrink-0 w-full max-w-5xl">
        <div className="card-body gap-4 text-center md:text-left ">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Post Title:</h1>
            <p className="py-6 flex items-center">google.com</p>
          </div>
        </div>
      </div>
      <div className="hero-content flex-col">
        <div className="divider"></div>
        <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
          <div className="card-body flex-row">
            <label className="label self-start">
              <span className="label-text text-2xl font-bold">
                Enter Post Title
              </span>
            </label>
            <div className="form-control gap-4 w-full">
              <input
                type="text"
                placeholder="post title here"
                className="input input-bordered w-full"
              />
              <div className="form-control inline-block">
                <button className="btn btn-primary">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPostTitle;
