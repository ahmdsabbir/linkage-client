import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import API from "../../../../api/api-config";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";
import Spinner from "../../../spinner";

const projectDetailsSchema = z.object({
  projectName: z.string().min(5, "please input more than 5 characters"),
  domain: z.string().min(5, "please input more than 5 characters"),
  wpUserName: z.string().min(5, "please input more than 5 characters"),
  wpAppPassword: z.string().min(5, "please input more than 5 characters"),
  projectStarted: z.string().min(5, "please input more than 5 characters"),
});

const EditProjectDetails = () => {
  const { auth, handleLogout } = useAuthState();
  const {
    state: { postTitleUrlTerm, loading },
  } = useAppState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectDetailsSchema),
  });

  const handleSubmitProjectDetails = async (data) => {
    /* 
     post Data must update
      edit project address must update before using this function
     
     */
    const postData = JSON.stringify({
      name: data.projectName,
      domain: data.domain,
      wp_username: data.wpUsername,
      wp_password: data.wpAppPassword,
    });

    try {
      dispatch({ type: "loading", payload: true });
      const response = await API.post("PROJECTEditPOstWillBeHErer", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth.token ? `Bearer ${auth?.token}` : "",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });
        toast.success(response?.data?.msg);
        // reset();
      } else {
        dispatch({ type: "loading", payload: false });
        toast.success(response?.data?.msg);
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error?.response?.data?.msg) {
        if (error?.response?.data?.msg == "Token has expired") {
          handleLogout();
          toast.error(error?.response?.data?.msg);
        } else {
          toast.error(error?.response?.data?.msg);
        }
      } else if (error?.message == "Network Error") {
        toast("something went wrong");
      } else {
        toast(error.message);
      }
    }
  };

  if (loading) {
    <Spinner />;
  } else {
    return (
      <div className="px-6 max-w-screen-2xl">
        <form
          onSubmit={handleSubmit(handleSubmitProjectDetails)}
          className="flex flex-col gap-2 xs:gap-4 md:gap-6"
        >
          <div className="form-control md:flex-row gap-4 sm:gap-4 md:gap-6">
            <label
              htmlFor="projectname"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[135px]"
            >
              Project Name
            </label>
            <input
              type="text"
              required
              autoFocus
              placeholder="projectName"
              {...register("projectName", { required: true })}
              className="input focus:outline-none input-bordered w-full rounded"
            />
          </div>
          {errors.projectName && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.projectName?.message}
            </span>
          )}

          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="domain"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[135px]"
            >
              Domain
            </label>
            <input
              type="text"
              required
              autoFocus
              placeholder="domain url..."
              {...register("domain", { required: true })}
              className="input focus:outline-none input-bordered w-full rounded"
            />
          </div>
          {errors.domain && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.domain?.message}
            </span>
          )}

          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="WP Username"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[135px]"
            >
              Wp User Name
            </label>
            <input
              type="text"
              required
              autoFocus
              {...register("wpUserName", { required: true })}
              className="input focus:outline-none input-bordered w-full rounded"
            />
          </div>
          {errors.wpUserName && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.wpUserName?.message}
            </span>
          )}

          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="WP App. Password"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[135px]"
            >
              Wp App. Password
            </label>
            <input
              type="password"
              required
              {...register("wpAppPassword", { required: true })}
              className="input focus:outline-none input-bordered w-full rounded"
            />
          </div>
          {errors.wpAppPassword && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.wpAppPassword?.message}
            </span>
          )}

          <div className="form-control md:flex-row gap-2 sm:gap-4 md:gap-6">
            <label
              htmlFor="projectStarted"
              className=" font-medium whitespace-nowrap flex-1 sm:min-w-[135px]"
            >
              Project Started at
            </label>
            <input
              type="text"
              required
              {...register("projectStarted", { required: true })}
              className="input focus:outline-none input-bordered w-full rounded"
            />
          </div>
          {errors.projectStarted && (
            <span className="alert alert-error shadow-lg w-auto p-2 mb-2">
              {errors.projectStarted?.message}
            </span>
          )}

          <div className="form-control md:flex-row md:ml-[158px]">
            <button className="btn bg-contrast border-0 text-white hover:bg-contrast-dark focus:bg-slate-600 rounded capitalize">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default EditProjectDetails;
