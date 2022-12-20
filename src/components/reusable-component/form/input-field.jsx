import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  { label, type = "text", ...props },
  ref
) {
  return (
    <div className="form-control gap-3 mb-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        ref={ref}
        {...props}
        className="input input-bordered"
      />
      <FieldError name={props.name} />
    </div>
  );
});
