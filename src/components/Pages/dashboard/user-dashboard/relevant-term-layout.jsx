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

const RelevantTermLayout = () => {
  // custom hook for form
  const form = useForm({ schema: relevantTerm });

  // getting data from global state context provider
  const {
    state: { projects, loading, error, postTitleUrlTerm },
    dispatch,
  } = useAppState();

  //   auth provider state
  const { auth } = useAuthState();

  // react @{navigate , id, location} router hook for redirecting desired link and dynamic link id
  const navigate = useNavigate();
  const { id } = useParams();
  const projectDomain = projects.find((item) => item.id == id);

  // handle action
  const handleSubmit = async (data) => {
    const postData = JSON.stringify({
      domain: projectDomain.domain,
      relevant_term: data.relevantTerm,
      target_title: postTitleUrlTerm.target_title,
    });
    // the relevant term has been saved for future use
    try {
      if (id == projectDomain.id) {
        await dispatch({ type: "relevantTerm", payload: data.relevantTerm });
        // start loading process & empty error state
        dispatch({ type: "error", payload: "" });
        dispatch({ type: "loading" });

        // post data to the api
        const response = await API.post("/core/suggestions", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: auth.token ? `Bearer ${auth?.token}` : "",
          },
          withCredentials: "true",
        });

        if (response?.status == 200) {
          await dispatch({
            type: "aiSuggestions",
            payload: [...response?.data?.suggestions],
          });
          navigate(`/dashboard/project-starter/${id}/suggestions`);
        }
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({ type: "error", payload: error?.message });
      } else if (error?.status == 400 || error?.status == 401) {
        dispatch({ type: "error", payload: "missing username or password" });
      } else if (error?.message == "Network Error") {
        dispatch({ type: "error", payload: error?.message });
      } else {
        dispatch({ type: "error", payload: "server error" });
      }
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="px-6">
        <div className="card-body rounded p-0 bg-base-100">
          <Form form={form} onSubmit={handleSubmit}>
            <Input
              label={"Relevant Term"}
              hintText={"We’ll make suggestion based on the term you give us."}
              type="text"
              placeholder="relevant term..."
              className="flex flex-col md:flex-row "
              autoFocus={true}
              {...form.register("relevantTerm")}
            />

            <button
              type="submit"
              className={`btn btn-primary text-white rounded border-none capitalize bg-accent-dark hover:bg-[#1A3353] md:ml-[232px] `}
            >
              Submit
            </button>
          </Form>
        </div>
        {error && <p className="text-red-800 font-medium">{error}</p>}
      </div>
    );
  }
};

export default RelevantTermLayout;