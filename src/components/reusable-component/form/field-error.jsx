import React from "react";
import { useFormContext } from "react-hook-form";

const FieldError = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return <span>{error.message}</span>;
};

export default FieldError;
