import React from "react";
import useForm from "../../hook/useForm";
import Form from "./form";
import { Input } from "./input-field";

const TestForm = () => {
  const form = useForm({});
  return (
    <>
      <Form form={form} onSubmit={(values) => console.log(values)}>
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
