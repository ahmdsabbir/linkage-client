/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAuthState } from "../context/auth-context";
import { useAppState } from "../context/update-post-context";
import { privateClient } from "../lib/api-config";
import { useErrorHandling } from "../utils/error-handling";
import ButtonLoader from "./button-loader";
import Input from "./input";

const CreateProjectSchema = z.object({
  projectTitle: z
    .string()
    .min(1, "This field cannot be empty")
    .max(255, "Please write less tha 255 characters"),
  domain: z.string().url(),
  wpUsername: z
    .string()
    .min(1, "This field cannot be empty")
    .max(255, "Please write less tha 255 characters"),
  wpAppPassword: z
    .string()
    .min(24, "Typically wordpress application passwords are of 24 characters ")
    .max(48, "Please write less than 48 characters"),
});

const CreateProject = () => {
  const {
    state: { selectedProject, targetTitleUrlTerm },
    dispatch,
  } = useAppState();
  const { auth } = useAuthState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateProjectSchema),
  });

  const queryClient = useQueryClient();
  const errorFunc = useErrorHandling();

  // axios post
  const createProject = async (data): Promise<{ data: unknown }> => {
    const postData = JSON.stringify({
      name: data.projectTitle,
      domain: data.domain,
      wp_username: data.wpUsername,
      wp_password: data.wpAppPassword,
    });

    const response = await privateClient.post("api/project", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth.token ? `Bearer ${auth?.token}` : "",
      },
    });

    return response.data;
  };

  // mutation
  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: async (successData) => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["projects"] });

      toast.success("project created successfully");
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });

  const handleCreateProjectSubmit = async (data) => {
    await mutation.mutateAsync(data);
  };
  return (
    <section>
      <div className="container mx-auto flex min-h-[90vh] items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleCreateProjectSubmit)}
        >
          <h1 className="mt-3 font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
            Create Your project
          </h1>
          <Input
            id="projectTitle"
            label="Project Name"
            type={"text"}
            placeholder={"Project Title"}
            // infoText={"aka, Project Title"}
            tooltipText={
              "Name your project, using only alpha numeric characters, without any spaces"
            }
            inputProps={register("projectTitle")}
            error={errors.projectTitle?.message as string}
          />
          <Input
            id="domain"
            label="Domain URL"
            type={"text"}
            placeholder={"Example: https://example.com"}
            tooltipText={"Insert the url of your wordpress site."}
            inputProps={register("domain")}
            error={errors.domain?.message as string}
          />
          <Input
            id="wp username"
            label="Wordpress Username"
            type={"text"}
            placeholder={"Example: admin"}
            tooltipText={"Do not insert your 'Application Password Name' "}
            inputProps={register("wpUsername")}
            error={errors.wpUsername?.message as string}
          />

          <Input
            id="Wp App. Password"
            label="WP Application Password"
            type={"password"}
            placeholder={"Example: mDAa 2Hic vZV4 KEsQ zHZq zbfz"}
            tooltipText={"Found under wp-dashboard->Users->Profile"}
            inputProps={register("wpAppPassword")}
            error={errors.wpAppPassword?.message as string}
          />

          <div className="mt-4">
            <button
              className={`btn ${
                mutation.isLoading ? "btn-disabled " : "btn-primary "
              }`}
              disabled={mutation.isLoading ? true : false}
            >
              {mutation.isLoading ? (
                <ButtonLoader loadingText={"Creating Your Project"} />
              ) : (
                "Create Project"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProject;
