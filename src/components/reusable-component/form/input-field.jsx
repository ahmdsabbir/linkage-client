import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  { label, type = "text", autoFocus = false, className, ...props },
  ref
) {
  return (
    <div className={`${className} gap-3 mb-2  `}>
      <label className=" label text-base pb-6 min-w-[117px]">
        <span className="font-medium">{label}</span>
      </label>

      <input
        type={type}
        ref={ref}
        autoFocus={autoFocus}
        {...props}
        className="  flex-auto input input-bordered "
      />
      <FieldError name={props.name} />
    </div>
  );
});
