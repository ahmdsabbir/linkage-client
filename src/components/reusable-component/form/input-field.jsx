import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  { label, type = "text", ...props },
  ref
) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} ref={ref} {...props} />
      <FieldError name={props.name} />
    </div>
  );
});
