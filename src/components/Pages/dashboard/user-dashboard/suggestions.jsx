import React from "react";
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

  //   auth provider state
  const { auth } = useAuthState();
  // getting data from global state context provider
  const {
    state: {
      selectedProject,
      postTitleUrlTerm,
      aiSuggestions,
      generatedHeading,
      loading,
      error,
    },
    dispatch,
  } = useAppState();
  console.log(postTitleUrlTerm);

  // event handler for new relevant term
  const handleSubmitNewSuggestion = async (data) => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: postTitleUrlTerm.source_title,
    });

    try {
      dispatch({ type: "error", payload: "" });
      await dispatch({ type: "relevantTerm", payload: data.relevantTerm });
      dispatch({ type: "loading" });
      const response = await API.post("/core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: "true",
      });
      console.log(response);
      if (response?.status === 200 && !response?.data?.msg) {
        await dispatch({
          type: "aiSuggestions",
          payload: [...response?.data?.suggestions],
        });
        await dispatch({ type: "error", payload: "" });
      } else {
        dispatch({ type: "error", payload: response?.data?.msg });
      }
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({ type: "error", payload: error?.message });
      } else if (error.response.status == 401) {
        await dispatch({ type: "loading", payload: false });
        await setAuth({});
        localStorage.clear();
        // navigate("/login", { state: { from: location }, replace: true });
        dispatch({
          type: "error",
          payload: "Your session has been expired. Please login again.",
        });
        navigate("/login");
      } else if (error?.response?.data.msg) {
        dispatch({ type: "error", payload: error?.response?.data.msg });
      } else if (error?.message == "Network Error") {
        dispatch({ type: "error", payload: error?.message });
      } else {
        dispatch({ type: "error", payload: "server error" });
      }
    }
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
          <div className="md:h-screen overflow-hidden overflow-y-scroll">
            {loading ? (
              <Spinner />
            ) : error ? (
              error && <p className="text-red-800">{error}</p>
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
