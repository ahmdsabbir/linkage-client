import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useAppState } from "../../../context/AppProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const postTitleSchema = z.object({
  postTitle: z.string().min(5, "post title must be more than 4 characters!"),
  // .max(500, "post title must be less than 500 characters."),
  postURL: z.string().url(),
  // .max(500, "post title must be less than 500 characters."),
});

const EnterPostTitle = () => {
  // getting data from global state context provider
  const {
    state: { projects },
    dispatch,
  } = useAppState();
  // getting data from global state context provider
  const form = useForm({ schema: postTitleSchema });
  // react router hook for redirecting desired link
  const navigate = useNavigate();
  const { id } = useParams();

  const projectDomain = projects.find((item) => item.id == id);
  // post request
  // if funciton cold be more percise. remember to edit the @{if else} funciton
  const handleSubmit = async (data) => {
    if (id == projectDomain.id) {
      await dispatch({ type: "postTitleUrl", payload: data });
      navigate(`/dashboard/project-starter/${id}/relevant`);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="px-6">
      <div className="card-body rounded drop-shadow bg-base-100">
        {/* form */}
        <Form form={form} onSubmit={handleSubmit}>
          <Input
            label="Enter Post Title"
            type="text"
            hintText="aka, Target Post"
            placeholder="post title here..."
            className="flex flex-col sm:flex-row"
            autoFocus={true}
            {...form.register("postTitle")}
          />
          <Input
            label="Post URL"
            type="text"
            placeholder="post url here..."
            className="flex flex-col sm:flex-row"
            {...form.register("postURL")}
          />
          {/* button */}
          <button
            type="submit"
            className="btn bg-accent-dark text-white rounded px-6  border-none sm:ml-[135px]"
          >
            submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default EnterPostTitle;
