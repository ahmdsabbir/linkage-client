import React from "react";
import { FormProvider } from "react-hook-form";

const Form = ({ form, onSubmit, children, ...props }) => {
  return (
    <FormProvider {...form}>
      {/* the `form` passed here is return value of useForm() hook */}
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
      </form>
    </FormProvider>
  );
};

export default Form;
