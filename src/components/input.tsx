import { RefCallback } from "react";

interface TextFieldProps {
  id?: string;
  label?: string;
  infoText?: string;
  type: "text" | "password" | "email";
  placeholder: string;
  error?: string;
  svgIcon?: JSX.Element;
  autofocus?: boolean;
  tooltipText?: string;
  isDisabled?: boolean;
  inputProps?: {
    onChange?: (ev: unknown) => unknown;
    onBlur?: (ev: unknown) => unknown;
    ref?: RefCallback<HTMLInputElement>;
    name?: string;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
  };
}

const Input = ({
  id,
  label,
  infoText,
  svgIcon,
  type,
  placeholder,
  tooltipText,
  isDisabled,
  inputProps,
  error,
}: TextFieldProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="label flex-col items-baseline">
          <span
            className={`label-text ${
              tooltipText ? "inline-flex items-center gap-2" : ""
            }  font-medium text-gray-700 text-base`}
          >
            {label}
            {tooltipText && (
              <span className="tooltip tooltip-info " data-tip={tooltipText}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </span>
            )}
          </span>

          {infoText && (
            <span className="font-base label-text text-gray-400 text-base">
              {infoText}
            </span>
          )}
        </label>
      )}
      <div className="relative mt-2 flex items-center ">
        {svgIcon && svgIcon}
        <input
          type={type}
          className={`block w-full rounded  bg-primary/5 py-3 ${
            svgIcon ? "px-11" : "px-5"
          }  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
          placeholder={placeholder}
          disabled={isDisabled}
          {...(inputProps ?? {})}
        />
      </div>
      {error ? <span className="label-text text-error">{error}</span> : null}
    </>
  );
};

export default Input;
