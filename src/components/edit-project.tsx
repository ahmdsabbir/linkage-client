import { z } from "zod";
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
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
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
          />
          <Input
            id="domain"
            label="Domain URL"
            type={"text"}
            placeholder={"Domain URL"}
          />
          <Input
            id="wp username"
            label="WP Username"
            type={"text"}
            placeholder={"wp username"}
          />

          <Input
            id="Wp App. Password"
            label="Wp App. Password"
            type={"Password"}
            placeholder={"Wp App. Password"}
          />
          <Input
            id="projectCreatedDate"
            label="Project Created At"
            type={"text"}
            placeholder={"Project created at"}
            isDisabled={true}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Create Project</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProject;
