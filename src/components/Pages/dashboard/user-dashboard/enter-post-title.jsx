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
  const { id } = useParams();
  // getting data from global state context provider
  const { dispatch } = useAppState();
  const form = useForm({ schema: postTitleSchema });
  // react router hook for redirecting desired link
  const navigate = useNavigate();

  // post request
  // if funciton cold be more percise. remember to edit the @{if else} funciton
  const handleSubmit = async (data) => {
    if (id) {
      await dispatch({ type: "postTitleUrl", payload: data });
      navigate(`/dashboard/project-starter/${id}/relevant`);
    } else {
      console.log("no id found");
      navigate("/unauthorized");
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
          <div className="flex gap-2 sm:gap-6 pt-2">
            <div className="hidden sm:block min-w-[117px] order-2 sm:order-1"></div>
            <div className="form-control inline-block w-2/3 order-1 sm:order-1">
              <button
                type="submit"
                className="btn bg-accent-dark text-white rounded px-6  border-none"
              >
                submit
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EnterPostTitle;
