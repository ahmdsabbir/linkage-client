import { forwardRef } from "react";
import FieldError from "./field-error";

export const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    hintText,
    autoFocus = false,
    className = "flex flex-col",
    minwidth = "min-w-[117px]",
    ...props
  },
  ref
) {
  return (
    <>
      <div className={`${className} sm:gap-2 md:gap-4 mb-2 md:mb-2  `}>
        <label
          className={`self-start flex flex-col label text-base  ${minwidth} max-w-[217px] md:pb-2`}
        >
          <span className="font-medium self-start">{label}</span>
          {hintText && (
            <span className="self-start text-black/60 text-sm">{hintText}</span>
          )}
        </label>

        <input
          type={type}
          ref={ref}
          autoFocus={autoFocus}
          {...props}
          className=" flex-grow inline-flex items-stretch input input-bordered focus:outline-0 rounded"
        />
      </div>
      <FieldError name={props.name} />
    </>
  );
});
