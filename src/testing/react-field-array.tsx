import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const ReactFieldArraySchema = z.object({
  supportPosts: z.array(
    z.object({
      pillarPost: z.string(),
      supportPostId: z.string(),
      supportPost: z.string().min(5, "type more than 5 characters"),
    })
  ),
});

const postsInitial = {
  pillarPost: " This is a pillar post",
  supportPosts: [
    { postId: "1", text: "text 1" },
    { postId: "2", text: "text 2" },
  ],
};
const postsInitialTest = [
  { postId: "123", pillarPost: " This is a pillar post" },
  { postId: "1", text: "text 1" },
  { postId: "2", text: "text 2" },
];

const ReactFieldArray = () => {
  const [posts, setPosts] = useState(() => postsInitialTest);

  //   const { pillarPost, supportPosts } = posts;

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid, errors, isValidating, isDirty },
    reset,
  } = useForm({
    resolver: zodResolver(ReactFieldArraySchema),
    defaultValues: { posts },
  });

  const { fields, append, remove } = useFieldArray({
    name: "posts",
    control,
  });

  return (
    <div>
      <h1 className="text-gray-800 text-2xl">React Field Array</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {fields.map((field, index) => {
          const errorForField = errors?.posts?.[index]?.text;
          return (
            <>
              <input
                key={field.postId ?? "123"}
                {...register(`posts.${index}.text` as const)}
                placeholder="Enter a text.."
                defaultValue={field.text ?? field.pillarPost}
                className="border border-gray-300 p-2 text-gray-700"
              />
              <p>{errorForField?.message ?? <>&nbsp;</>}</p>;
            </>
          );
        })}

        <button
          type="button"
          className="mx-auto block rounded-lg bg-blue-300 p-4 hover:bg-blue-400"
          onClick={() =>
            append({
              //   postId: "new",
              text: "",
            })
          }
        >
          Append
        </button>

        <button className="btn-primary btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactFieldArray;
