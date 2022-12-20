import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .nonempty("Field is required")
    .min(6, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = useForm({ schema: loginFormSchema });
  const handleSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <>
      <h2 className="text-5xl font-semibold text-center mb-5">Login</h2>
      <div className="flex items-center justify-center">
        <Form form={form} onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="text"
            placeholder="email@mail.com"
            {...form.register("email")}
          />
          <Input
            label="password"
            type="password"
            placeholder="password"
            {...form.register("password")}
          />
          <div className="form-control mt-6">
            <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600">
              Login
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
