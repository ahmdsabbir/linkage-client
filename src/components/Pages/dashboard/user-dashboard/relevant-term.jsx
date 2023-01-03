import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const relevantTerm = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const RelevantTerm = ({
  className = "",
  btnText = "generate suggestion",
  btnBg = "bg-accent-dark hover:bg-[#1A3353]",
  hintText,
  label,
}) => {
  const form = useForm({ schema: relevantTerm });
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

  // handle action
  const handleSubmit = async (data) => {
    console.log(data);

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
    <div className="px-6">
      <div className="card-body rounded p-0 bg-base-100">
        <Form form={form} onSubmit={handleSubmit}>
          <Input
            label={label}
            hintText={hintText}
            type="text"
            placeholder="relevant term..."
            className="flex flex-col md:flex-row "
            autoFocus={true}
            {...form.register("relevantTerm")}
          />

          <div className="flex gap-2 sm:gap-6 ">
            <div className="hidden sm:block flex-1  min-w-[117px] max-w-[217px] order-2 md:order-1"></div>
            <div className="form-control flex-1  morder-1 md:order-1">
              <div>
                <button
                  type="submit"
                  className={`btn btn-primary text-white rounded border-none capitalize ${className} ${btnBg}`}
                >
                  {btnText}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RelevantTerm;
