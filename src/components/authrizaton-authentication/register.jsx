import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import API from "../../api/api-config";
import { useAppState } from "../context/AppProvider";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";
import Spinner from "../spinner";

const signupFormSchema = z
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
  const location = useLocation();
  const navigate = useNavigate();
  const form = useForm({ schema: signupFormSchema });
  const {
    dispatch,
    state: { loading, error },
  } = useAppState();

  // singup handle function
  const handleSubmitRegister = async (data) => {
    const postJsonData = JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    try {
      await dispatch({ type: "error", payload: "" });
      await dispatch({ type: "loading" });
      const response = await API.post("/auth/register", postJsonData);
      if (response.status == 201 || response.status == 200) {
        if (
          response?.data?.msg == "username already taken" ||
          response?.data?.msg == "email already taken"
        ) {
          setErr(response.data.msg);
        } else {
          navigate("/verify");
        }
      }
    } catch (error) {
      dispatch({ type: "loading", loading: false });
      // throw new Response(`${error.message}`, { status: 404 });
      if (!error.respnose) {
        setErr("No server response");
      } else {
        setErr("Registration failed");
      }
    }
  };

  if (loading) {
    <Spinner />;
  } else {
    return (
      <div className="grid place-self-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl  font-semibold text-center mb-5">Register</h2>
          <Form form={form} onSubmit={handleSubmitRegister}>
            <Input
              label="Username"
              type="text"
              placeholder="username"
              className="flex flex-col"
              {...form.register("username")}
            />
            <Input
              label="Email"
              type="text"
              placeholder="email@mail.com"
              {...form.register("email")}
            />
            <Input
              label="Password"
              type="password"
              placeholder="password"
              {...form.register("password")}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="confirm password"
              {...form.register("confirm")}
            />
            {/* err message */}
            {error && <p className="text-red-800">{error}</p>}

            <div className="form-control mt-6">
              <button className="btn bg-contrast border-none text-white hover:bg-contrast-dark focus:bg-slate-600">
                Register
              </button>
            </div>
          </Form>
          <NavigateLoginRegister
            text="Already a user?"
            btnLabel="Login"
            to={"/login"}
          />
        </div>
      </div>
    );
  }
};

export default Register;
