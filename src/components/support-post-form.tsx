/* eslint-disable @typescript-eslint/no-misused-promises */
import { useFieldArray, useForm } from "react-hook-form";

const SupportPostForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm({
    defaultValues: {
      url: [{ postUrl: "" }],
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: "url",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });

  return (
    <div className=" text-gray-700">
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        {fields.map((field, index) => {
          return (
            <section key={field.id} className=" mb-2 flex items-center gap-2 ">
              {/* <label htmlFor="url">
                <span>Name</span>
              </label> */}
              <input
                className={`block w-full rounded  bg-primary/5 py-3 ${"px-5"}  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
                {...register(`url.${index}.postUrl`, { required: true })}
              />

              <button type="button" onClick={() => remove(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-error"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </section>
          );
        })}
        <button
          className="btn-primary btn mr-2"
          type="button"
          onClick={() => {
            append({
              postUrl: "",
            });
          }}
        >
          Append
        </button>

        {/* <p>{errors.cart?.root?.message}</p> */}
        <button className="btn-primary btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SupportPostForm;
