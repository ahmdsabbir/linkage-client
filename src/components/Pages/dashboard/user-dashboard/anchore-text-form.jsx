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
    <Form form={form} onSubmit={handleAchorTextSubmit}>
      <Input
        label="Anchor Text"
        type="text"
        placeholder="anchor text"
        autoFocus={true}
        className="flex flex-col md:flex-row"
        {...form.register("anchorText")}
      />
      <div className="flex flex-col md:flex-row gap-2 sm:gap-6 mt-4">
        <div className=" whitespace-nowrap order-2 md:order-1 md:min-w-[117px]"></div>
        <div className="order-1 md:order-2">
          <button className="btn bg-accent-dark hover:bg-[#1A3353] capitalize text-white border-none rounded">
            Generate Section
          </button>
        </div>
      </div>
    </Form>
  );
};

export default AnchorTextForm;
