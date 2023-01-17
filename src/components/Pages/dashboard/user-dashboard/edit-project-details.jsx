import React from "react";
import { z } from "zod";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const projectDetailsSchema = z.object({
  projectName: z.string().min(5, "please input more than 5 characters"),
  domain: z.string().min(5, "please input more than 5 characters"),
  wpAppPassword: z.string().min(5, "please input more than 5 characters"),
  projectStarted: z.string().min(5, "please input more than 5 characters"),
});

const EditProjectDetails = () => {
  const form = useForm({ schema: projectDetailsSchema });
  const { auth } = useAuthState();
  const {
    state: { postTitleUrlTerm },
  } = useAppState();

  const handleSubmitProjectDetails = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form form={form} onSubmit={handleSubmitProjectDetails}>
        <Input
          label="Project Name"
          type="text"
          placeholder="Project Name"
          {...form.register("projectName")}
        />
        <Input
          label="Domain"
          type="text"
          placeholder="domain url..."
          {...form.register("domain")}
        />
        <Input
          label="WP App. Password"
          type="password"
          placeholder="WP App. Password"
          {...form.register("wpAppPassword")}
        />
        <Input
          label="Project Started at"
          type="text"
          placeholder="projectStarted"
          {...form.register("projectStarted")}
        />
        <div className="form-control mt-6">
          <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditProjectDetails;
