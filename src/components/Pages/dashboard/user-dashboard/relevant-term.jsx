import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";
import Spinner from "../../../spinner";

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
    state: { projects, loading, postTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();

  // react @{navigate , id} router hook for redirecting desired link and dynamic link id
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // handle action
  const handleSubmit = async (data) => {
    const projectDomain = projects.find((item) => item.id == id);
    const postData = JSON.stringify({
      domain: projectDomain.domain,
      relevant_term: data.relevantTerm,
      target_title: postTitleUrlTerm.target_title,
    });
    /* console.log(projectDomain, postData);
    if (projectDomain) return; */
    // 7 Best Fabric Pots With Buying Guide
    try {
      const response = await API.post("/core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: "true",
      });
      console.log(response?.data);
      if (response?.status === 200) {
        if (location.pathname === `/dashboard/project-starter/${id}/relevant`) {
          await dispatch({
            type: "aiSuggestions",
            payload: [...response?.data?.suggestions],
          });
          navigate(`/dashboard/project-starter/${id}/suggestions`);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // the relevant term has been saved for future use
    dispatch({ type: "relevantTerm", payload: data.relevantTerm });
  };

  return (
    <div className="px-6">
      {location.pathname === `/dashboard/project-starter/${id}/relevant` &&
      loading ? (
        <Spinner />
      ) : (
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
              <div className="hidden sm:block flex-1 min-w-[117px] max-w-[217px] order-2 md:order-1"></div>
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
      )}
    </div>
  );
};

export default RelevantTerm;
