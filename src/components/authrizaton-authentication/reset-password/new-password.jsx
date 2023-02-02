import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import useForm from "../../hook/useForm";
import Form from "../../reusable-component/form/form";
import { Input } from "../../reusable-component/form/input-field";

const newPasswordSchema = z
  .object({
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

const NewPassword = () => {
  const form = useForm({ schema: newPasswordSchema });
  const navigate = useNavigate();
  const handleSubmitNewPassword = (data) => {
    navigate("/reset-password/confirmation");
  };
  return (
    <div className="grid place-self-center h-screen">
      <div className="grid place-self-center">
        <h2 className="text-4xl text-center">Enter Your New Password</h2>
        <Form form={form} onSubmit={handleSubmitNewPassword}>
          <Input
            labele="New pasword"
            type="password"
            placeholder="password"
            {...form.register("password")}
          />
          <Input
            labele="Conrim Pasword"
            type="password"
            placeholder="confirm password"
            {...form.register("confirm")}
          />
          <div className="form-control mt-6">
            <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600 capitalize">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewPassword;
