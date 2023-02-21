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
      cart: [{ postUrl: "" }],
    },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "cart",
    control,
    rules: {
      required: "Please append at least 1 item",
    },
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submit data", data);
        })}
      >
        <section>
          <label>
            <span>Name</span>
            <input {...register(`cart.name`, { required: true })} />
          </label>

          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
        </section>
      </form>
    </div>
  );
};

export default SupportPostForm;
