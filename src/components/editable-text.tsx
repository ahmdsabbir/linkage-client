/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface TextFieldProps {
  id?: string;
  label?: string;
  infoText?: string;
  error?: string;
  svgIcon?: JSX.Element;
  autofocus?: boolean;
  tooltipText?: string;
  isDisabled?: boolean;
  enableEdit?: boolean;
  editIcon?: JSX.Element;
  fieldValue: string | undefined;
  headingHeight: string;
  handleBlur: (e: unknown) => void;
}

const EditableTextSchema = z.object({
  title: z.string(),
});

const EditableText = ({
  id,
  label,
  infoText,
  svgIcon,
  tooltipText,
  headingHeight,
  error,

  fieldValue,
  handleBlur,
}: TextFieldProps) => {
  const { setValue, register } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(EditableTextSchema),
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleEnableEdit = () => {
    setIsEdit(true);
  };

  useEffect(() => {
    if (fieldValue) {
      setValue("title", fieldValue);
    }
  }, [fieldValue, setValue]);

  return (
    <form>
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
            <span className="font-base label-text text-gray-400 text-base ">
              {infoText}
            </span>
          )}
        </label>
      )}
      <div className="relative mt-2 flex items-center ">
        {svgIcon && svgIcon}

        <span className="absolute -top-8 right-0" onClick={handleEnableEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6  text-primary hover:cursor-pointer hover:text-blue-700  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </span>

        <textarea
          className={`block    ${headingHeight} w-full rounded  ${
            isEdit
              ? "bg-primary/5 p-3 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              : "disabled  resize-none bg-white py-3 px-0  font-medium text-primary focus:border-0 focus:outline-none"
          } `}
          disabled={isEdit ? false : true}
          {...register("title", {
            onBlur: handleBlur,
          })}
        />
      </div>
      {error ? <span className="label-text text-error">{error}</span> : null}
    </form>
  );
};

export default EditableText;
