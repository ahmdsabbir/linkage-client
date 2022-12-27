import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";

const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(5, "Username must be more than 6 characters")
      .max(25, "Consider using a short username"),
    email: z.string().email("Please enter a valid email address."),
    password: z
      .string()
      .nonempty("Field is required")
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
  const handleSubmitRegister = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="grid place-self-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl  font-semibold text-center mb-5">Register</h2>
        <Form form={form} onSubmit={handleSubmitRegister}>
          <Input
            label="Username"
            type="text"
            placeholder="username"
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
          <div className="form-control mt-6">
            <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600">
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
};

export default Register;
