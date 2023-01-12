import React from "react";
import { z } from "zod";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";

const newProjectStartSchema = z.object({
  projectName: z.string().min(5, "please input more than 5 characters"),
  domain: z.string().min(5, "please input more than 5 characters"),
  wpAppPassword: z.string().min(5, "please input more than 5 characters"),
  wpUsername: z.string().min(4, "please input more than 5 characters"),
});

const NewProject = () => {
  const form = useForm({ schema: newProjectStartSchema });
  const { auth } = useAuthState();
  const {
    state: { postTitleUrlTerm },
  } = useAppState();

  const handleNewProjectDetails = (data) => {
    console.log(data);
  };
  return (
    <div className="px-6">
      <Form form={form} onSubmit={handleNewProjectDetails}>
        <Input
          label="Project Name"
          type="text"
          placeholder="Project Name"
          {...form.register("projectName")}
          className="flex flex-col md:flex-row "
        />
        <Input
          label="Domain"
          type="text"
          placeholder="domain url..."
          {...form.register("domain")}
          className="flex flex-col md:flex-row "
        />
        <Input
          label="WP Username"
          type="text"
          placeholder="wpUsername"
          {...form.register("wpUsername")}
          className="flex flex-col md:flex-row "
        />
        <Input
          label="WP App. Password"
          type="password"
          placeholder="WP App. Password"
          {...form.register("wpAppPassword")}
          className="flex flex-col md:flex-row "
        />

        <div className="form-control md:flex-row mt-6">
          <button className="btn bg-contrast text-accent-dark border-0 text-white hover:bg-contrast-dark focus:bg-slate-600">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewProject;
