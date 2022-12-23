import React from "react";
import { z } from "zod";
import { globalData } from "../../../context/Provider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const titleUrlSchema = z.object({
  title: z
    .string()
    .min(6, "Please enter more characters")
    .max(500, "Consider using a more like paragraphs"),
  url: z
    .string()
    .min(1, "Please enter more characters")
    .max(500, "Consider using a more like paragraphs"),
});

const ChosenTitleUrl = () => {
  const { userData } = globalData();
  const form = useForm({ schema: titleUrlSchema });
  //   console.log(userData);

  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="">
        <h2 className="text-5xl font-semibold text-center mb-5">
          Chosen Title & URL
        </h2>
        <div className="flex items-center justify-center">
          <Form form={form} onSubmit={handleSubmit}>
            <Input
              label="Title"
              type="text"
              placeholder="Post title"
              defaultValue={userData.newdata?.postTitle}
              {...form.register("title")}
            />
            <Input
              label="URL"
              type="text"
              placeholder="url"
              //   disabled
              defaultValue={userData.newdata?.term}
              {...form.register("url")}
            />
            <div className="form-control mt-6">
              <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600">
                Generate Heading
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChosenTitleUrl;
