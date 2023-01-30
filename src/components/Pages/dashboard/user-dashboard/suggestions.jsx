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
import "./scrollbar.css";

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
    },
    loading,
    setLoading,
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
      setLoading(true);
      const response = await API.post("api/core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: "true",
      });

      if (response?.status == 200 && !response?.data?.msg) {
        setLoading(false);
        await dispatch({
          type: "aiSuggestions",
          payload: [...response?.data?.suggestions],
        });
      } else {
        setLoading(false);

        toast.warning(
          response?.data?.msg
            ? response?.data?.msg
            : `Could not find suggestions.
               Try another term.`
        );
      }
    } catch (error) {
      setLoading(false);

      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout();
          toast.error(error?.response?.data?.msg);
        } else {
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast.error(error.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="">
      <div className="">
        {/* search for more new term form form */}
        <div className="">
          <p className="text-xl font-semibold text-center mb-4">
            Not Happy with the suggestions? Try with different Term
          </p>
          <div
            className="card-body rounded p-0 bg-base-100 px-6 "
            id="chosenTitleUrl"
          >
            <Form form={form} onSubmit={handleSubmitNewSuggestion}>
              <Input
                label={"Relevant Term"}
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
                className={`btn btn-primary w-full sm:w-auto capitalize  border-none rounded md:ml-[228px]`}
              >
                Try Again
              </button>
            </Form>
          </div>
        </div>
        {/* divider */}
        <div className="px-6">
          <hr className=" my-6 box-content text-sm h-[0.0625em] bg-gradient-to-r from-transparent via-[#aaaaaa]/20 via-[#aaaaaa]/80 to-transparent"></hr>
        </div>

        {/* chosen title url text area, generated heading area, ai suggestions card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <div className="flex flex-col gap-4">
            <div className="card rounded bg-base-100">
              {/* generate heading */}
              <ChosenTitleUrl />
            </div>
            <div className="card bg-primary/20 ">
              <GenerateHeading title={generatedHeading} />
            </div>
          </div>

          {/* suggestions generated from api call */}
          <div
            className="md:h-screen overflow-hidden overflow-y-scroll scroll-smooth "
            style={{
              scrollbarColor: " #eaedf2 #172B4D",
              scrollbarWidth: "thin",
            }}
          >
            {loading ? (
              <Spinner
                customClassName={"grid place-items-center h-1/2 w-full"}
              />
            ) : aiSuggestions.length == 0 ? (
              <p className="text-red-800 font-bold">
                Something went wrong. Please try again!
              </p>
            ) : (
              aiSuggestions?.map((suggestion) => (
                <SuggestionsCard
                  key={suggestion.post_id}
                  title={suggestion.title}
                  url={suggestion.url}
                  id={suggestion.post_id}
                  pushUp={"chosenTitleUrl"}
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
