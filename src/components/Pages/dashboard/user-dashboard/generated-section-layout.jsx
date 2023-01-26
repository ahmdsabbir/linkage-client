import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
  const { auth, handleLogout } = useAuthState();
  const {
    state: { generatedHeading, generatedParagraph, loading, postTitleUrlTerm },
    dispatch,
  } = useAppState();

  const { name } = useParams();
  const navigate = useNavigate();

  // anchor text field handler
  const handleAnchorTextSubmit = async (data) => {
    const postData = JSON.stringify({
      combined_heading: generatedHeading,
      anchor_text: data.anchorText,
      source_url: postTitleUrlTerm.source_url,
    });

    try {
      // start loading process & empty error state
      await dispatch({
        type: "generatedParagraph",
        payload: "",
      });
      dispatch({ type: "loading", payload: true });

      const response = await API.post("api/core/paragraph", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth?.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });
        await dispatch({
          type: "generatedParagraph",
          payload: response?.data?.paragraph,
        });
      } else {
        dispatch({ type: "loading", payload: false });
        toast.warning(
          response?.data?.msg ? response?.data?.msg : "Try another anchor text"
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
        toast("something went wrong");
      } else {
        toast(error.message);
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
        <Form form={form} onSubmit={handleAnchorTextSubmit}>
          <Input
            label="Anchor Text"
            type="text"
            placeholder="anchor text"
            autoFocus={true}
            className="flex flex-col md:flex-row"
            {...form.register("anchorText")}
          />

          <button className="btn  w-full sm:w-auto btn-primary  border-none rounded md:ml-[132px] capitalize">
            {generatedParagraph ? "Regenerate Section" : "Generate Section"}
          </button>
        </Form>
      </div>

      {/* generated Section */}
      <div className="lg:col-start-2">
        <div className="mb-4">
          <h2 className="text-3xl text-accent-dark">Generated Section</h2>
          <p className="text-slate-400">
            Following Section was Generated. Insert It Wherever You’d like on
            Your Post
          </p>
        </div>
        <div className="rounded border border-accent-dark/20 text-accent-dark bg-accent-dark/5 mb-4 p-4  ">
          <h2 className="font-semibold mb-4">{generatedHeading}</h2>
          <hr className=" mb-2"></hr>
          {loading ? (
            <Spinner
              customClassName={"grid place-items-center h-[50vh] w-full"}
            />
          ) : (
            generatedParagraph && generatedParagraph
          )}
        </div>
        <div className=" self-start flex-1 order-1 md:order-1">
          <button
            className="btn btn-primary  w-full sm:w-auto border-none rounded capitalize"
            onClick={handleUpdateSectionRoute}
            disabled={generatedParagraph ? false : true}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedSectionLayout;
