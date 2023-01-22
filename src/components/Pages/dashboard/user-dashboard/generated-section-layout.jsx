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

const anchorTextSchema = z.object({
  anchorText: z
    .string()
    .min(4, "plese write more than 4 characters")
    .max(5000, "please do not write more than 255 characters"),
});

const GeneratedSectionLayout = () => {
  const form = useForm({ schema: anchorTextSchema });
  const { auth } = useAuthState();
  const {
    state: { generatedHeading, generatedParagraph, loading, error },
    dispatch,
  } = useAppState();

  const location = useLocation();
  const { name } = useParams();
  const navigate = useNavigate();

  // anchortext field handler
  const handleAchorTextSubmit = async (data) => {
    const postData = JSON.stringify({
      combined_heading: generatedHeading,
      anchor_text: data.anchorText,
    });

    try {
      // start loading process & empty error state
      await dispatch({ type: "error", payload: "" });
      await dispatch({
        type: "generatedParagraph",
        payload: "",
      });
      dispatch({ type: "loading" });
      await dispatch({ type: "error", payload: "" });
      const response = await API.post("core/paragraph", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });
        await dispatch({ type: "error", payload: "" });
        await dispatch({
          type: "generatedParagraph",
          payload: response?.data?.paragraph,
        });
      } else {
        dispatch({ type: "error", payload: response?.data?.msg });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({
          type: "error",
          payload: error.message,
        });
      } else if (error?.response?.data?.msg) {
        dispatch({ type: "error", payload: error?.response?.data?.msg });
      } else if (error?.message == "Network Error") {
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
      } else {
        dispatch({ type: "error", payload: "server error" });
      }
    }
  };

  const handleUpdateSectionRoute = () => {
    navigate(`/dashboard/project-starter/${name}/update-content`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">
      {/* anchor input field */}
      <div className="lg:col-start-1">
        <Form form={form} onSubmit={handleAchorTextSubmit}>
          <Input
            label="Anchor Text"
            type="text"
            placeholder="anchor text"
            autoFocus={true}
            className="flex flex-col md:flex-row"
            {...form.register("anchorText")}
          />

          <button className="btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded md:ml-[132px]">
            {generatedParagraph ? "Regenerate Section" : "Generate Section"}
          </button>
        </Form>
      </div>

      {/* generated Section */}
      <div className="lg:col-start-2">
        <div className="mb-4">
          <h2 className="text-3xl">Generated Section</h2>
          <p className="text-slate-400">
            Following Section was Generated. Insert It Wherever You’d like on
            Your Post
          </p>
        </div>
        <div className="rounded text-base-100 bg-slate-500 mb-4 p-4 ">
          <h2 className="text-2xl mb-4">{generatedHeading}</h2>
          {loading && !error ? (
            <Spinner className="h-full w-full" />
          ) : !loading && error ? (
            <p className="text-red-800">{error}</p>
          ) : (
            generatedParagraph && generatedParagraph
          )}
        </div>
        <div className=" self-start flex-1 order-1 md:order-1">
          <button
            className="btn bg-contrast border-none rounded text-white"
            onClick={handleUpdateSectionRoute}
            disabled={generatedParagraph ? false : true}
          >
            Yup..Looks Good!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedSectionLayout;
