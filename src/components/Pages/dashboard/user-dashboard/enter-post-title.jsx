import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAppState } from "../../../context/AppProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const postTitleSchema = z.object({
  postTitle: z
    .string()
    .min(5, "post title must be more than 4 characters!")
    .max(500, "post title must be less than 500 characters."),
});

const EnterPostTitle = () => {
  const form = useForm({ schema: postTitleSchema });
  const context = useAppState();
  const navigate = useNavigate();

  // post request

  const handleSubmit = async (data) => {
    await context.setUserData(data);
    // await setUserData(data);
    navigate(`/dashboard/project-starter/relevant`);
  };

  return (
    <div className="hero-content flex-col">
      {/* form */}
      <Form form={form} onSubmit={handleSubmit}>
        <div className="form-control gap-4 flex-1">
          <Input
            label="Post Title here"
            type="text"
            placeholder="post title here"
            className="input input-bordered "
            {...form.register("postTitle")}
          />
          {/* button */}
          <div className="flex">
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
