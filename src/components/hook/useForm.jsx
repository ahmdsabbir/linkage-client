import { useForm as useHookForm } from "react-hook-form";
// function to resolve zod schema we provide
import { zodResolver } from "@hookform/resolvers/zod";
// We provide additional option that would be our zod schema.

const useForm = ({ schema, ...formConfig }) => {
  return useHookForm({
    resolver: zodResolver(schema),
    ...formConfig,
  });
};

export default useForm;
