/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { useAppState } from "../context/update-post-context";
import { useRelevantTerm } from "../utils/projects";
import ButtonLoader from "./button-loader";
import Input from "./input";

const RelevantTermSchema = z.object({
  relevantTerm: z
    .string()
    .min(4, "relevant term must be more than 4 characters!"),
});

// eslint-disable-next-line react/display-name
const RelevantTerm = ({ relevantTermRef, suggestionsRef }, ref) => {
  const {
    state: { targetTitleUrlTerm },
    dispatch,
  } = useAppState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RelevantTermSchema),
  });
  // useMutation custom query for relevant term
  const mutation = useRelevantTerm(suggestionsRef, reset);
  // submit relevant term
  const handleRelevantSubmit = async (data) => {
    if (targetTitleUrlTerm.target_title === undefined) {
      toast.warning("Target post title is not found");
      return;
    }
    await dispatch({ type: "relevantTerm", payload: data });
    mutation.mutate(data);
  };

  return (
    <section ref={relevantTermRef}>
      <div className=" my-10 flex min-h-80v  items-center justify-center px-6 pt-20">
        <div className=" flex w-full max-w-lg items-center  justify-center rounded-md py-6  shadow-lg">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit(handleRelevantSubmit)}
          >
            <Input
              id={"relevantTerm"}
              label={"Relevant Topic"}
              // infoText={"aka, Target Post"}
              type={"text"}
              placeholder={"Example: interlinking"}
              tooltipText={
                "This is the topic that we will base our suggestions on."
              }
              inputProps={register("relevantTerm")}
              error={errors.relevantTerm?.message as string}
            />

            <div className="mt-4">
              <button
                className={`btn ${
                  mutation.isLoading ? "btn-disabled " : "btn-primary "
                }`}
                disabled={mutation.isLoading ? true : false}
              >
                {mutation.isLoading ? (
                  <ButtonLoader loadingText={"Getting Suggestions"} />
                ) : (
                  "Get Suggestions"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(RelevantTerm);
