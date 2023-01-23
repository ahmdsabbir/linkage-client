import React from "react";
import { toast } from "react-toastify";
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
  relevantTerm: z.string("Try more relevant words"),
});

const Suggestions = () => {
  const form = useForm({ schema: relevantTerm });

  //   auth provider state
  const { auth, handleLogout } = useAuthState();
  // getting data from global state context provider
  const {
    state: {
      selectedProject,
      postTitleUrlTerm,
      aiSuggestions,
      generatedHeading,
      loading,
    },
    dispatch,
  } = useAppState();

  // event handler for new relevant term
  const handleSubmitNewSuggestion = async (data) => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: postTitleUrlTerm.source_title,
    });

    try {
      await dispatch({ type: "relevantTerm", payload: data.relevantTerm });
      dispatch({ type: "loading", payload: true });
      const response = await API.post("/core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: "true",
      });

      if (response?.status === 200 && !response?.data?.msg) {
        dispatch({ type: "loading", payload: false });
        await dispatch({
          type: "aiSuggestions",
          payload: [...response?.data?.suggestions],
        });
      } else {
        dispatch({ type: "loading", payload: false });
        toast.warning(
          response?.data?.msg
            ? response?.data?.msg
            : `Could not find suggestions.
               Try another term.`
        );
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout();
          toast.error(error?.response?.data?.msg);
        } else {
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast(error.message);
      } else {
        toast(error.message);
      }
    }
  };

  return (
    <div className="">
      <div className=" ">
        {/* serach for more new term form form */}
        <div className="">
          <p className="text-xl font-semibold text-center mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>
          <div className="card-body rounded p-0 bg-base-100 px-6 ">
            <Form form={form} onSubmit={handleSubmitNewSuggestion}>
              <Input
                label={"Search More Suggestions"}
                hintText={"Tip: Try to choose relevant terms."}
                type="text"
                defaultValue={postTitleUrlTerm.relevant_term}
                placeholder="relevant term..."
                className="flex flex-col md:flex-row "
                autoFocus={true}
                {...form.register("relevantTerm")}
              />

              <button
                type="submit"
                className={`btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded md:ml-[228px]`}
              >
                Re-Generate
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
          <div className="md:h-screen overflow-hidden overflow-y-scroll">
            {loading ? (
              <Spinner
                customClassName={"grid place-items-center h-1/2 w-full"}
              />
            ) : (
              aiSuggestions?.map((suggestion, i) => (
                <SuggestionsCard
                  key={suggestion.post_id}
                  title={suggestion.title}
                  url={suggestion.url}
                  id={suggestion.post_id}
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
