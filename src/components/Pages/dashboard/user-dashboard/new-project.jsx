import React, { useState } from "react";
import { z } from "zod";
import API from "../../../../api/api-config";
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
  // const { reset } = useForm();
  const { auth } = useAuthState();
  const [success, setSuccess] = useState("");

  const handleNewProjectDetails = async (data) => {
    const postData = JSON.stringify({
      name: data.projectName,
      domain: data.domain,
      wp_username: data.wpUsername,
      wp_password: data.wpAppPassword,
    });
    try {
      await dispatch({ type: "loading", payload: true });
      await dispatch({ type: "error", payload: "" });
      const response = await API.post("/project", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        withCredentials: true,
      });
      if (response?.status === 200 || response?.status === 201) {
        await dispatch({ type: "loading", payload: false });
        await dispatch({ type: "error", payload: "" });
        setSuccess(response?.data?.msg);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error?.response) {
        dispatch({ type: "error", payload: error?.message });
      } else if (error?.message == "Network Error") {
        dispatch({ type: "error", payload: error?.message });
      } else if (error?.response?.data.msg) {
        dispatch({ type: "error", payload: error?.response?.data.msg });
      } else {
        dispatch({ type: "error", payload: "server error" });
      }
    }
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
        {success && <p className="text-red-700">{success}</p>}

        <div className="form-control md:flex-row mt-6">
          <button className="btn bg-contrast border-0 text-white hover:bg-contrast-dark focus:bg-slate-600">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewProject;
