import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppState } from "../../../context/AppProvider";
import { useAuthState } from "../../../context/AuthProvider";

const projectDetailsSchema = z.object({
  projectName: z.string().min(5, "please input more than 5 characters"),
  domain: z.string().min(5, "please input more than 5 characters"),
  wpUserName: z.string().min(5, "please input more than 5 characters"),
  wpAppPassword: z.string().min(5, "please input more than 5 characters"),
  projectStarted: z.string().min(5, "please input more than 5 characters"),
});

const EditProjectDetails = () => {
  const { auth } = useAuthState();
  const {
    state: { postTitleUrlTerm },
  } = useAppState();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectDetailsSchema),
  });

  const handleSubmitProjectDetails = (data) => {
    console.log(data);
    reset();
  };
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
          <button className="btn bg-contrast border-0 text-white hover:bg-contrast-dark focus:bg-slate-600 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProjectDetails;
