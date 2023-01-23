import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import useForm from "../../../hook/useForm";
import Form from "../../../reusable-component/form/form";
import { Input } from "../../../reusable-component/form/input-field";
import Spinner from "../../../spinner";

const newProjectStartSchema = z.object({
  projectName: z.string().min(5, "please input more than 5 characters"),
  domain: z.string().min(5, "please input more than 5 characters"),
  wpAppPassword: z.string().min(6, "please input more than 5 characters"),
  wpUsername: z.string().min(4, "please input more than 5 characters"),
});

const NewProject = () => {
  const form = useForm({ schema: newProjectStartSchema });
  // const { reset } = useForm();
  const { auth } = useAuthState();
  // react router dom hook
  const navigate = useNavigate();

  const {
    dispatch,
    state: { loading },
  } = useAppState();

  const handleNewProjectDetails = async (data) => {
    const postData = JSON.stringify({
      name: data.projectName,
      domain: data.domain,
      wp_username: data.wpUsername,
      wp_password: data.wpAppPassword,
    });
    try {
      dispatch({ type: "loading", payload: true });
      const response = await API.post("project", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });
        toast.success(response?.data?.msg);
      } else {
        dispatch({ type: "loading", payload: false });
        toast.success(response?.data?.msg);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout(navigate("/"));
        } else {
          console.log(error?.response?.data?.msg);
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast(error.message);
      } else {
        toast(error.message);
      }
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="px-6">
        <Form form={form} onSubmit={handleNewProjectDetails}>
          <Input
            label="Project Name"
            type="text"
            placeholder="Project Name"
            autoFocus
            {...form.register("projectName")}
            className="flex flex-col md:flex-row "
            minwidth={"min-w-[143px]"}
          />
          <Input
            label="Domain"
            type="text"
            placeholder="domain url..."
            {...form.register("domain")}
            className="flex flex-col md:flex-row"
            minwidth={"min-w-[143px]"}
          />
          <Input
            label="WP Username"
            type="text"
            placeholder="wpUsername"
            {...form.register("wpUsername")}
            className="flex flex-col md:flex-row"
            minwidth={"min-w-[143px]"}
          />
          <Input
            label="WP App. Password"
            type="password"
            placeholder="WP App. Password"
            {...form.register("wpAppPassword")}
            className="flex flex-col md:flex-row"
            minwidth={"min-w-[143px]"}
          />

          <div className="form-control md:flex-row mt-4 md:ml-[166px]">
            <button className="btn bg-contrast border-0 text-white hover:bg-contrast-dark focus:bg-slate-600 rounded">
              Submit
            </button>
          </div>
        </Form>
      </div>
    );
  }
};

export default NewProject;
