import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  { label, type = "text", hintText, autoFocus = false, className, ...props },
  ref
) {
  return (
    <div
      className={`${className} gap-2 sm:gap-6 md:items-center mb-2 md:mb-0  `}
    >
      <label className="self-start flex flex-col label text-base min-w-[117px] max-w-[217px] md:pb-6">
        <span className="font-medium self-start">{label}</span>
        {hintText && <span className="self-start">{hintText}</span>}
      </label>

      <input
        type={type}
        ref={ref}
        autoFocus={autoFocus}
        {...props}
        className="flex-auto input input-bordered focus:outline-0 rounded"
      />
      <FieldError name={props.name} />
    </div>
  );
});
