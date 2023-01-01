import React from "react";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const anchorTextSchema = z.object({
  anchorText: z
    .string()
    .min(4, "plese write more than 4 characters")
    .max(5000, "please do not write more than 255 characters"),
});

const AnchorTextForm = () => {
  const form = useForm({ schema: anchorTextSchema });
  const { generatedHeading, setGeneratedParagraph } = useAppState();

  const handleAchorTextSubmit = async (data) => {
    const postData = {
      combined_heading: generatedHeading,
      anchor_text: data.anchorText,
    };

    try {
      const response = await API.post("core/paragraph", postData);
      if (response?.status === 200) {
        await setGeneratedParagraph(response?.data?.paragraph);
      }
      // console.log(response);
    } catch (err) {
      console.log("anchor text", err);
    }
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
