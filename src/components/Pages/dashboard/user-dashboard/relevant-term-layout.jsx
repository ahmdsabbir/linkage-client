import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";
import Spinner from "../../../spinner";

const relevantTerm = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const RelevantTermLayout = ({
  className = "",
  btnText = "generate suggestion",
  hintText,
  label,
}) => {
  // custom hook for form
  const form = useForm({ schema: relevantTerm });
  const [err, setErr] = useState("");

  // getting data from global state context provider
  const {
    state: { projects, loading, postTitleUrlTerm },
    dispatch,
  } = useAppState();

  //   auth provider state
  const { auth } = useAuthState();

  // react @{navigate , id, location} router hook for redirecting desired link and dynamic link id
  const navigate = useNavigate();
  const { id } = useParams();

  // handle action
  const handleSubmit = async (data) => {
    const projectDomain = projects.find((item) => item.id == id);
    const postData = JSON.stringify({
      domain: projectDomain.domain,
      relevant_term: data.relevantTerm,
      target_title: postTitleUrlTerm.target_title,
    });
    // the relevant term has been saved for future use
    dispatch({ type: "relevantTerm", payload: data.relevantTerm });
    // start loading process
    // post data to the api
    try {
      dispatch({ type: "loading" });
      setErr("");
      const response = await API.post("/core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: "true",
      });
      if (response?.status === 200) {
        await dispatch({
          type: "aiSuggestions",
          payload: [...response?.data?.suggestions],
        });
        await dispatch({ type: "loading", payload: false });
        // navigate(`/dashboard/project-starter/${id}/suggestions`);
      } else {
        console.log(response);
        throw new Error("maybe cors Network Error");
      }
    } catch (error) {
      await dispatch({ type: "loading", payload: false });
      console.log(loading, error.message);
      setErr(error.message);
      console.log(err);
    }
  };

  if (loading && !err) {
    return <Spinner />;
  } else if (!loading && err) {
    console.log(err);
    <p className="text-5xl text-black">{err?.message}</p>;
  } else {
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
              <div className="hidden sm:block flex-1 min-w-[117px] max-w-[217px] order-2 md:order-1"></div>
              <div className="form-control flex-1  morder-1 md:order-1">
                <div>
                  <button
                    type="submit"
                    className={`btn btn-primary text-white rounded border-none capitalize bg-accent-dark hover:bg-[#1A3353] ${className}`}
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
  }
};

export default RelevantTermLayout;
