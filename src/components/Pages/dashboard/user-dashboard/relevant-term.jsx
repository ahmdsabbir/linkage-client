import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";

const RelevantTerm = ({
  className = "",
  btnText = "generate suggestion",
  btnBg = "bg-accent-dark hover:bg-[#1A3353]",
}) => {
  const { register, handleSubmit } = useForm();
  // getting data from global state context provider
  const {
    userPostTitle: { postTitle: target_title },
    setTermData,
    setAiSugetions,
  } = useAppState();

  // react @{navigate , id} router hook for redirecting desired link and dynamic link id
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const onSubmit = async (data) => {
    try {
      await setTermData(data);
      const postData = {
        target_title,
        relevant_term: data.relevantTerm,
      };
      const response = await API.post("core/suggestions", postData);
      if (response?.status === 200) {
        await setAiSugetions(response?.data?.suggestions);
        if (location.pathname === `/dashboard/project-starter/${id}/relevant`) {
          navigate(`/dashboard/project-starter/${id}/suggestions`);
        }
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card rounded flex-shrink-0 w-full max-w-5xl drop-shadow bg-base-100">
          <div className="card-body flex-row">
            <label className="label self-start">
              <span className="label-text text-xl ">Enter Relevent Term</span>
            </label>
            <div className="form-control gap-4 flex-1">
              <input
                type="text"
                placeholder="relevent term"
                className={`input input-bordered rounded ${className}`}
                {...register("relevantTerm", { required: true, maxLength: 20 })}
              />
              <div className="form-control inline-block">
                <button
                  type="submit"
                  className={`btn btn-primary text-white rounded border-none capitalize ${className} ${btnBg}`}
                >
                  {btnText}
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
