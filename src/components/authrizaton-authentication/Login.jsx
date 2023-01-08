import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import API from "../../api/api-config";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = useForm({ schema: loginFormSchema });
  const handleSubmitLogin = async (data) => {
    console.log(data);
    // navigate("/dashboard");
    try {
      const response = await API.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log(response);
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <div className="grid place-self-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-center mb-5">Login</h2>
        <Form form={form} onSubmit={handleSubmitLogin}>
          <Input
            label="Email"
            type="text"
            autoFocus={true}
            placeholder="email@mail.com"
            {...form.register("email")}
          />
          <Input
            label="password"
            type="password"
            placeholder="password"
            autoFocus={false}
            {...form.register("password")}
          />
          <label className="label">
            <Link
              to={"/reset-password"}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </Link>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-contrast text-white border-none hover:bg-contrast-dark focus:bg-slate-600">
              Login
            </button>
          </div>
        </Form>
        <NavigateLoginRegister
          text="Have no account?"
          btnLabel="Register"
          to={"/register"}
        />
      </div>
    </div>
  );
};

export default Login;
