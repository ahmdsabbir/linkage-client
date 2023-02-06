interface TextFieldProps {
  id?: string;
  label?: string;
  infoText?: string;
  type: string;
  placeholder: string;
  error?: string;
  svgIcon?: JSX.Element;
  autofocus?: boolean;
  tooltipText?: string;
  //   inputProps?: unknown;
}

const Input = ({
  id,
  label,
  infoText,
  svgIcon,
  type,
  placeholder,
  tooltipText,
}: TextFieldProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="label flex-col items-baseline">
          <span
            className={`label-text ${
              tooltipText ? "inline-flex gap-2" : ""
            }  text-base font-medium text-gray-700`}
          >
            {label}
            {tooltipText && (
              <span className="tooltip" data-tip={tooltipText}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-400"
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
            <span className="font-base label-text text-base text-gray-400">
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
        />
      </div>
    </>
  );
};

export default Input;
