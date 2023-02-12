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
    .min(4, "Please write more than 4 characters")
    .max(255, "Please write less tha 255 characters"),
  domain: z.string().url(),
  wpUsername: z
    .string()
    .min(4, "Please write more than 4 characters")
    .max(255, "Please write less tha 255 characters"),
  wpAppPassword: z
    .string()
    .min(4, "Please write more than 4 characters")
    .max(255, "Please write less tha 255 characters"),
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
    mutation.mutate(data);
  };
  return (
    <section>
      <div className="container mx-auto flex min-h-[90vh] items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleCreateProjectSubmit)}
        >
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Create Your project
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
                "Crate Project"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProject;
