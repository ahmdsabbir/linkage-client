import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  { label, type = "text", className, ...props },
  ref
) {
  return (
    <div className={`${className} gap-3 mb-2  `}>
      <label className="col-span-1 label pb-6">
        <span className="label-text">{label}</span>
      </label>

      <input
        type={type}
        ref={ref}
        {...props}
        className=" col-span-5 flex-auto  input input-bordered "
      />
      <FieldError name={props.name} />
    </div>
  );
});
