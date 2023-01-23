import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

const RelevantTermLayout = () => {
  // custom hook for form
  const form = useForm({ schema: relevantTerm });

  // getting data from global state context provider
  const {
    state: { selectedProject, loading, postTitleUrlTerm },
    dispatch,
  } = useAppState();

  //   auth provider state
  const { auth, handleLogout } = useAuthState();
  // react @{navigate , location} router hook for redirecting desired link and dynamic link id
  const navigate = useNavigate();

  // handle action
  const handleSubmit = async (data) => {
    const postData = JSON.stringify({
      domain: selectedProject.domain,
      relevant_term: data.relevantTerm,
      source_title: postTitleUrlTerm.source_title,
    });
    // the relevant term has been saved for future use
    try {
      await dispatch({ type: "relevantTerm", payload: data });
      // start loading process & empty error state
      dispatch({ type: "loading", payload: true });

      // post data to the api
      const response = await API.post("core/suggestions", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: "true",
      });

      if (response?.status == 200 && !response?.data?.msg) {
        dispatch({ type: "loading", payload: false });
        await dispatch({
          type: "aiSuggestions",
          payload: [...response?.data?.suggestions],
        });
        navigate(
          `/dashboard/project-starter/${selectedProject.name.toLowerCase()}/suggestions`
        );
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

  if (loading) {
    return (
      <Spinner customClassName={"grid place-items-center h-[50vh] w-full"} />
    );
  } else {
    return (
      <div className="px-6">
        <div className="card-body rounded p-0 bg-base-100 ">
          <Form form={form} onSubmit={handleSubmit}>
            <Input
              label={"Relevant Term"}
              hintText={`We’ll make suggestion based on the term you give us.`}
              type="text"
              placeholder="relevant term..."
              className="flex flex-col md:flex-row "
              autoFocus={true}
              {...form.register("relevantTerm")}
            />

            <button
              type="submit"
              className={`btn btn-primary text-white rounded border-none capitalize bg-accent-dark hover:bg-[#1A3353] md:ml-[232px] md:mt-[-15px] `}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    );
  }
};

export default RelevantTermLayout;
