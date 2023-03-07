/* eslint-disable @typescript-eslint/no-misused-promises */
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSiloPostLinks } from "../utils/silo-query";

const SupportPostForm = () => {
  // const navigation after submission
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
    reset,
  } = useForm({
    defaultValues: {
      url: [{ pillarPost: "" }, { supportPost: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "url",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });
  const mutation = useSiloPostLinks(reset);

  const tableDataHandler = (data) => {
    mutation.mutate(data);
    // navigate("/dashboard/silo/add-support-post-table-form");
  };

  return (
    <div className=" mt-5 text-gray-700">
      <form onSubmit={handleSubmit(tableDataHandler)}>
        {fields.map((field, index) => {
          return (
            <section key={field.id} className=" mb-2 flex    gap-2 ">
              {index === 0 ? (
                <div className="inline-flex w-full flex-col">
                  <label htmlFor="pillar post">Pillar Post</label>
                  <input
                    className={`block w-full rounded  bg-primary/5 py-3 ${"px-5"}  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
                    {...register(`url.${0}.pillarPost`, { required: true })}
                  />
                </div>
              ) : index === 1 ? (
                <div className="inline-flex w-full flex-col">
                  <label htmlFor="pillar post">Support Post</label>
                  <input
                    className={`block w-full rounded  bg-primary/5 py-3 ${"px-5"}  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
                    {...register(`url.${index}.supportPost`, {
                      required: true,
                    })}
                  />
                </div>
              ) : (
                <div className="inline-flex w-full flex-col">
                  <label htmlFor="pillar post">Support Post</label>
                  <span className="flex">
                    <input
                      className={`block w-full rounded  bg-primary/5 py-3 ${"px-5"}  text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40`}
                      {...register(`url.${index}.supportPost`, {
                        required: true,
                      })}
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
                  </span>
                </div>
              )}
            </section>
          );
        })}
        <button
          className="btn-primary btn mr-2"
          type="button"
          onClick={() => {
            append({
              supportPost: "",
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
