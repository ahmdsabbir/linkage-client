import React from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
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
  const handleSubmit = (data) => {
    const projectdomain = projects.find((item) =>
      item.id === id ? item?.domain : "not found"
    );

    fetch("http://192.168.101.4:5000/core/suggestions", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth ? `Bearer ${auth}` : "",
      },
      body: JSON.stringify({
        domain: "https://anikyusuf.com",
        relevant_term: "lulu leggins",
        target_title: "Why Doesn’T Super Glue Work",
      }),
    })
      .then((res) => res.json())
      .then((suggestionData) => {
        if (location.pathname === `/dashboard/project-starter/${id}/relevant`) {
          dispatch({
            type: "aiSuggestions",
            payload: [...suggestionData?.suggestions],
          });
          navigate(`/dashboard/project-starter/${id}/suggestions`);
        } else {
          return;
        }
      });
    /*  try {
      await dispatch({ type: "relevantTerm", payload: data });
      // start loading
      // dispatch({ type: "loading" });
      // add post title and relevant term to one Object
      const postData = JSON.stringify({
        domain: "https://anikyusuf.com",
        relevant_term: "lulu leggins",
        target_title: "Why Doesn’T Super Glue Work",
      });

      // post data to the server
      // const response = await API.post("core/suggestions", postData, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: auth ? `Bearer ${auth}` : "",
      //   },
      // }); 

      const response = await fetch(
        "http://192.168.101.4:5000/core/suggestions",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: auth ? `Bearer ${auth}` : "",
          },
          body: JSON.stringify({
            domain: "https://anikyusuf.com",
            relevant_term: "lulu leggins",
            target_title: "Why Doesn’T Super Glue Work",
          }),
        }
      );

      const responseData = await response.json();

      console.log(responseData);
      // spinner off
      // dispatch({ type: "loading", loading: !loading });
      //set data to state
      await dispatch({
        type: "aiSuggestions",
        payload: [...response?.data?.suggestions],
      });

      if (location.pathname === `/dashboard/project-starter/${id}/relevant`) {
        navigate(`/dashboard/project-starter/${id}/suggestions`);
      } else {
        return;
      }
    } catch (err) {
      // dispatch({ type: "loading", loading: false });
      console.log(err.message);
    }  */
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
