/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppState } from "../context/update-post-context";
import { useEditProject } from "../utils/projects";
import Input from "./input";

const EditProjectSchema = z.object({
  projectTitle: z
    .string()
    .min(1, "This field cannot be empty")
    .max(255, "Please write less than 255 characters"),
  domain: z.string().url(),
  wpUsername: z
    .string()
    .min(1, "This field cannot be empty")
    .max(255, "Please write less than 255 characters"),
  wpAppPassword: z
    .string()
    .min(24, "Typically wordpress application passwords are of 24 characters ")
    .max(48, "Please write less than 48 characters"),
});

const EditProject = () => {
  const {
    state: { selectedProject },
  } = useAppState();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditProjectSchema),
    defaultValues: {
      projectTitle: "",
      domain: "",
      wpUsername: "",
      wpAppPassword: "",
    },
  });

  useEffect(() => {
    // setValue func imported as default value
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access

    setValue("projectTitle", selectedProject.name);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    setValue("domain", selectedProject.domain);
    setValue("wpUsername", selectedProject.wp_username);
    setValue("wpAppPassword", selectedProject.wp_password);
  }, [selectedProject, setValue]);

  // mutation
  const mutation = useEditProject(reset);

  const handleProjectSubmit = async (data) => {
    await mutation.mutateAsync(data);
  };

  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleProjectSubmit)}
        >
          <h1 className="mt-3 font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
            Edit your Project
          </h1>
          <Input
            id="projectTitle"
            label="Project Title"
            type={"text"}
            placeholder={"Project Title"}
            infoText={"aka, Project Title"}
            tooltipText={"aka, Project Title"}
            inputProps={register("projectTitle")}
            error={errors.projectTitle?.message as string}
          />
          <Input
            id="domain"
            label="Domain URL"
            type={"text"}
            placeholder={"Domain URL"}
            inputProps={register("domain")}
            error={errors.domain?.message as string}
          />
          <Input
            id="wp username"
            label="WP Username"
            type={"text"}
            placeholder={"wp username"}
            inputProps={register("wpUsername")}
            error={errors.wpUsername?.message as string}
          />

          <Input
            id="Wp App. Password"
            label="Wp App. Password"
            type={"password"}
            placeholder={"Wp App. Password"}
            inputProps={register("wpAppPassword")}
            error={errors.wpAppPassword?.message as string}
          />
          {/* <Input
            id="projectCreatedDate"
            label="Project Created At"
            type={"text"}
            placeholder={"Project created at"}
            isDisabled={true}
          /> */}

          <div className="mt-4">
            <button className="btn-primary btn">Edit Project</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProject;
