import React from "react";
import { z } from "zod";
import useForm from "../../hook/useForm";
import Form from "./form";
import { Input } from "./input-field";

const loginFormSchema = z.object({
  firstName: z.string().min(1, "First Name must be atleast 1 characters long!"),

  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const TestLogin = () => {
  const form = useForm({ schema: loginFormSchema });
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
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
        <button type="submit">Submit </button>
      </Form>
    </>
  );
};

export default TestLogin;
