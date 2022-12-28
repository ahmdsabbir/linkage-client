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

const AnchorTextForm = () => {
  const form = useForm({ schema: anchorTextSchema });

  const handleAchorTextSubmit = (data) => {
    console.log("anchor text", data);
  };
  return (
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
  );
};

export default AnchorTextForm;
