import React from "react";
import { z } from "zod";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";

const emailValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const ForgotPassword = () => {
  const form = useForm({ schema: emailValidationSchema });

  const handleSubmitEmail = (data) => {
    console.log(data);
    /*  navigate("/dashboard"); */
  };
  return (
    <div className="grid place-self-center">
      <h2 className="text-5xl font-semibold text-center mb-5">
        Enter Your Email
      </h2>
      <div className="flex items-center justify-center mb-5">
        <Form form={form} onSubmit={handleSubmitEmail}>
          <Input
            label="Email"
            type="text"
            placeholder="email@mail.com"
            {...form.register("email")}
          />

          <div className="form-control mt-6">
            <button className="btn bg-contrast text-accent-dark hover:bg-contrast-dark focus:bg-slate-600">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
