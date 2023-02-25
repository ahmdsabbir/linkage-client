/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import Input from "../../components/input";
import { useAuthState } from "../../context/auth-context";
import { primaryClient } from "../../lib/api-config";
import SiloProject from "../../pages/user-dashboard/silo-project";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(64, "Consider using a short password"),
});

interface HandLoginSubmitProps {
  data: object;
}

const Login = () => {
  const { auth, setAuth } = useAuthState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    if (
      Object.keys(auth).length === 0 &&
      auth.constructor === Object &&
      !auth?.token
    ) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const handLoginSubmit = async (data: HandLoginSubmitProps) => {
    try {
      const response = await primaryClient.post("api/auth/login", data);
      if (response.status == 200 || response.status == 201) {
        await setAuth({ token: response.data.access_token });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.msg) {
          toast.error(error?.response?.data?.msg);
        } else if (error?.message == "Network Error") {
          toast.error("something went wrong");
        } else {
          toast.error(error.message ? error.message : "login failed");
        }
      } else {
        toast.error("something went wrong");
      }
    }
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center space-y-3 px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handLoginSubmit)}
        >
          {/* <img
            className="h-7 w-auto sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          /> */}

          <h1 className="mt-3 pb-4 text-center font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
            Login
          </h1>
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

          <div className="mt-6">
            <button className="btn-primary btn w-full">Log in</button>
          </div>
        </form>
        <div className=" text-center ">
          <Link
            to="/register"
            className="text-dodger-blue-500 text-sm hover:underline"
          >
            Don’t have an account yet? Register
          </Link>
        </div>
      </div>
      {/* silo components testing */}
      <div className="flex  gap-2">
        <SiloProject />
     
      </div>
     
    </section>
  );
};

export default Login;
