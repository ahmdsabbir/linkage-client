import React from "react";
import { z } from "zod";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const anchorTextSchema = z.object({
  anchorText: z
    .string()
    .min(4, "plese write more than 4 characters")
    .max(255, "please do not write more than 255 characters"),
});
const GeneratedSEction = () => {
  const form = useForm({ schema: anchorTextSchema });

  const handleAchorTextSubmit = (data) => {
    console.log("anchor text", data);
  };
  return (
    <div className="grid grid-cols-2  gap-4">
      {/* anchor input field */}
      <Form
        form={form}
        onSubmit={handleAchorTextSubmit}
        className="pr-4 border-r-2 border-slate-700"
      >
        <Input
          label="Anchor Text"
          type="text"
          placeholder="anchor text"
          {...form.register("anchorText")}
        />
        <button className="btn bg-accent-light">Generate Section</button>
      </Form>
      {/* generated Section */}
      <div className="  p-4 ">
        <div className="mb-4 p-4 ">
          <h2 className="text-3xl">Generated Section</h2>
          <p className="text-slate-400">
            Following Section was Generated. Insert It Wherever You’d like on
            Your Post
          </p>
        </div>
        <div className="rounded-md bg-slate-700 mb-4 p-4 ">
          <h2 className="text-2xl mb-4">AI Generated Relevant Heading</h2>
          <p>
            AI Generated Relevant Paragraph. So, given a user id, this method
            creates and returns a token from the payload and the secret key set
            in the config.py file. <a>given anchor text</a>The payload is where
            we add metadata about the token and information about the user. This
            info is often referred to as{" "}
          </p>
        </div>
        <button className="btn bg-accent">Yup..Looks Good!</button>
      </div>
    </div>
  );
};

export default GeneratedSEction;
