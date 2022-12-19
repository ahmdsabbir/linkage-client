import React from "react";

const InputField = ({ title, action, placeholder, btnStyle }) => {
  return (
    <div className="card flex-shrink-0 w-full max-w-5xl shadow-2xl bg-base-100">
      <div className="card-body flex-row">
        <label className="label self-start">
          <span className="label-text text-2xl font-bold">{title}</span>
        </label>
        <div className="form-control gap-4 flex-1">
          <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered "
          />
          <div className="form-control inline-block">
            <button className={`btn ${btnStyle}`}>{action}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
