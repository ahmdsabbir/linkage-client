import { useForm as useHookForm } from "react-hook-form";

// We provide additional option that would be our zod schema.

const useForm = ({ schema, ...formConfig }) => {
  return useHookForm({
    ...formConfig,
  });
};

export default useForm;
