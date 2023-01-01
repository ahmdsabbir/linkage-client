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

  const form = useForm({ schema: postTitleSchema });
  // getting data from global state context provider
  const context = useAppState();
  // react router hook for redirecting desired link
  const navigate = useNavigate();

  // post request
  // if funciton cold be more percise. remember to edit the @{if else} funciton
  const handleSubmit = async (data) => {
    await context.setUserPostTitle(data);
    navigate(`/dashboard/project-starter/${id}/relevant`);
    console.log(data);
  };

  return (
    <div className="card rounded drop-shadow p-4">
      {/* form */}
      <Form form={form} onSubmit={handleSubmit}>
        <div className="">
          <Input
            label="Post Title here"
            type="text"
            placeholder="post title here..."
            className="grid grid-cols-6"
            {...form.register("postTitle")}
          />
          <Input
            label="Post URL"
            type="text"
            placeholder="post url here..."
            className="grid grid-cols-6 "
            {...form.register("postURL")}
          />
          {/* button */}
          <div className="flex pt-2">
            <div className="w-1/6"></div>
            <div className="form-control inline-block w-2/3">
              <button type="submit" className="btn btn-primary border-gray-600">
                submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EnterPostTitle;
