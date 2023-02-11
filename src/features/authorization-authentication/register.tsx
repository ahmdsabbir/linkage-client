import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import Input from "../../components/input";
import { primaryClient } from "../../lib/api-config";

const RegisterFormSchema = z
  .object({
    username: z
      .string()
      .min(5, "Username must be more than 6 characters")
      .max(25, "Consider using a short username"),
    email: z.string().email("Please enter a valid email address."),
    password: z
      .string()
      .min(6, "Please choose a longer password")
      .max(256, "Consider using a short password"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "password did not match",
  });

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(RegisterFormSchema) });

  const navigate = useNavigate();

  // axios post
  const registerUser = async (
    data
  ): Promise<{
    msg(msg: any): unknown;
    data: unknown;
  }> => {
    const postData = JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    });

    const response = await primaryClient.post("api/auth/register", postData);

    return response.data;
  };

  // mutation
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: async (registered) => {
      toast.success(
        registered?.msg ? registered?.msg : "Registration Successfull"
      );
      navigate("/login");
      reset();
    },
    onError: async (error) => {
      const errorMsg = await errorFunc(error);
      toast.error(errorMsg);
    },
  });

  const handleRegisterSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-white ">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <div className="mx-auto flex justify-center">
            <img
              className="h-7 w-auto sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="http://localhost:3000/"
              className="w-1/3 border-b-2 border-blue-500 pb-4 text-center font-medium capitalize text-gray-800 dark:border-blue-400 dark:text-white"
            >
              Register
            </a>
          </div>

          <Input
            type={"text"}
            placeholder={"Username"}
            svgIcon={
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
            }
            inputProps={register("username")}
            error={errors.username?.message as string}
          />

          <Input
            type={"email"}
            placeholder={"Email address"}
            svgIcon={
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            }
            inputProps={register("email")}
            error={errors.email?.message as string}
          />

          <Input
            type={"password"}
            placeholder={"password here"}
            svgIcon={
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            }
            inputProps={register("password")}
            error={errors.password?.message as string}
          />
          <Input
            type={"password"}
            placeholder={"confirm password "}
            svgIcon={
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            }
            inputProps={register("confirm")}
            error={errors.confirm?.message as string}
          />

          <div className="mt-6">
            <button
              className="btn-primary btn w-full"
              disabled={mutation.isLoading ? true : false}
            >
              {" "}
              {mutation.isLoading ? "Registering" : "Register"}{" "}
            </button>
            <div className="mt-6 text-center ">
              <Link
                to={"/login"}
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account? Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
