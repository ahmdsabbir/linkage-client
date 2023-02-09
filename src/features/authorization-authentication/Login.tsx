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
      await setAuth({ token: response.data.access_token });
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
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handLoginSubmit)}
        >
          <img
            className="h-7 w-auto sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />

          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            sign In
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
            <button className="btn-primary btn w-full">Sign in</button>
          </div>
        </form>
      </div>
      <div className=" text-center ">
        <Link
          to="/register"
          className="text-sm text-dodger-blue-500 hover:underline"
        >
          Don’t have an account yet? Register
        </Link>
      </div>
    </section>
  );
};

export default Login;

/* useMutation example
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Button } from "./elements";
import { PostQueryKey } from "../customHooks/queries";

interface Props {
  userId: number;
}

const sendUserPost = async (userId: number, title: string, body: string) => {
  const res = await fetch("http://localhost:8000/test/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      user: { id: userId },
      title: title,
      body: body,
    }),
  });
  return await res.json();
};
const CreatePost = (props: Props) => {
  const queryClient = useQueryClient();
  const title = useRef("");
  const body = useRef("");
  const mutation = useMutation({
    mutationFn: () => sendUserPost(props.userId, title.current, body.current),

    onSuccess: () => {
      queryClient.invalidateQueries([PostQueryKey, props.userId]);
    },
  });

  const add = () => mutation.mutate();
  return (
    <div className="border rounded shadow p-2 grid grid-cols-6 gap-2">
      <label className="block" htmlFor="title">
        Title
      </label>
      <input
        onChange={(e) => (title.current = e.target.value)}
        className="border  col-span-5"
        type="text"
        id="title"
      />

      <label className="block">body</label>
      <textarea
        onChange={(e) => (body.current = e.target.value)}
        className="border col-span-5"
        name="body"
        id="body"
      ></textarea>
      <Button onClick={add}>Add Post</Button>
    </div>
  );
};

export default CreatePost;
*/
