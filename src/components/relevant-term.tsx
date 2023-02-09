import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppState } from "../context/update-post-context";
import Input from "./input";

const RelevantTermSchema = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

const RelevantTerm = () => {
  const { state, dispatch } = useAppState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RelevantTermSchema),
  });

  const handleRelevantSubmit = async (data) => {
    await dispatch({ type: "relevantTerm", payload: data });
  };

  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleRelevantSubmit)}
        >
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Relevant Term
          </h1>
          <Input
            id={"relevantTerm"}
            label={"Relevant Term"}
            infoText={"aka, Target Post"}
            type={"text"}
            placeholder={"relevant term"}
            inputProps={register("relevantTerm")}
            error={errors.relevantTerm?.message as string}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Get Suggestions</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RelevantTerm;
