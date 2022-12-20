import React from "react";
import { z } from "zod";
import useForm from "../../hook/useForm";
import Form from "./form";
import { Input } from "./input-field";

const signUpFormSchema = z.object({
  firstName: z.string().min(1, "First Name must be atleast 1 characters long!"),
  username: z
    .string()
    .min(4, "Username must be atleast 1 characters long!")
    .max(10, "Consider using shorter username."),
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const TestForm = () => {
  const form = useForm({ schema: signUpFormSchema });
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form form={form} onSubmit={handleSubmit}>
        <Input
          label="Your first name"
          type="text"
          placeholder="John"
          // press ctrl + space when you type firstName
          {...form.register("firstName")}
        />
        <Input
          label="Choose username"
          type="text"
          placeholder="im_john_doe"
          {...form.register("username")}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          {...form.register("email")}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Your password (min 5)"
          {...form.register("password")}
        />
        <button type="submit">Submit </button>
      </Form>
    </>
  );
};

export default TestForm;
