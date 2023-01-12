import { useForm as useHookForm } from "react-hook-form";
// import { useForm as useHookForm, FormProvider, UseFormReturn, FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

// function to resolve zod schema we provide
import { zodResolver } from "@hookform/resolvers/zod";

const useForm = ({ schema, ...formConfig }) => {
  return useHookForm({
    resolver: zodResolver(schema),
    ...formConfig,
  });
};

export default useForm;
