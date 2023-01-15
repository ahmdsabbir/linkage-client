import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";
import SuggestionsCard from "../../../reusable-component/suggestion-card";
import Spinner from "../../../spinner";
import ChosenTitleUrl from "./chosen-title-url";
import GenerateHeading from "./generate-heading";

const relevantTerm = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const Suggestions = () => {
  const form = useForm({ schema: relevantTerm });
  const { id } = useParams();
  // getting data from global state context provider

  //   auth provider state
  const { auth } = useAuthState();
  const {
    state: {
      projects,
      postTitleUrlTerm,
      aiSuggestions,
      generatedHeading,
      loading,
    },
    dispatch,
  } = useAppState();

  const [err, setErr] = useState("");

  const handleSubmitNewSuggestion = async (data) => {
    const projectDomain = projects.find((item) => item.id == id);
    const postData = JSON.stringify({
      domain: projectDomain.domain,
      relevant_term: data.relevantTerm,
      target_title: postTitleUrlTerm.target_title,
    });

    try {
      await dispatch({ type: "relevantTerm", payload: data.relevantTerm });
      dispatch({ type: "loading" });
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
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      setErr(error);
    }
    // the relevant term has been saved for future use
  };

  return (
    <div className="">
      <div className="">
        {/* serach for more new term form form */}
        <div className="">
          <p className="text-xl font-semibold text-center mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>
          <div className="card-body rounded p-0 bg-base-100 px-6">
            <Form form={form} onSubmit={handleSubmitNewSuggestion}>
              <Input
                label={"Search More Suggestions"}
                hintText={"Tip: Try to choose relevant terms."}
                type="text"
                placeholder="relevant term..."
                className="flex flex-col md:flex-row "
                autoFocus={true}
                {...form.register("relevantTerm")}
              />

              <button
                type="submit"
                className={`btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded md:ml-[228px]`}
              >
                Generate suggestion again
              </button>
            </Form>
          </div>
        </div>
        {/* divider */}
        <div className="px-6">
          <hr className=" my-6 box-content text-sm h-[0.0625em] bg-gradient-to-r from-transparent via-[#aaaaaa]/20 via-[#aaaaaa]/80 to-transparent"></hr>
        </div>

        {/* chosen title url text area, gnerated heading area, ai suggestons card */}
        <div className="grid grid-cols-2 gap-6 px-6">
          <div className="flex flex-col gap-4">
            <div className="card rounded bg-base-100">
              {/* generate heading */}
              <ChosenTitleUrl />
            </div>
            <div className="card bg-base-100 ">
              <GenerateHeading title={generatedHeading} />
            </div>
          </div>

          {/* suggestions generated from api call */}
          <div>
            {loading ? (
              <Spinner />
            ) : err ? (
              <h2 className="text-5xl text-black">{err.message}</h2>
            ) : (
              aiSuggestions?.map((suggestion, i) => (
                <SuggestionsCard
                  key={suggestion.url + i}
                  title={suggestion.title}
                  url={suggestion.url}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
