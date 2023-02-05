interface TextFieldProps {
  id?: string;
  label?: string;
  infoText?: string;
  type: string;
  placeholder: string;
  error?: string;
  svgIcon?: JSX.Element;
  autofocus?: boolean;
  //   inputProps?: unknown;
}

const Input = ({
  id,
  label,
  infoText,
  svgIcon,
  type,
  placeholder,
}: TextFieldProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="label flex-col items-baseline">
          <span className="label-text text-base font-medium text-gray-700">
            {label}
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
