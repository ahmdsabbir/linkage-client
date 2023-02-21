/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAppState } from "../context/update-post-context";
import { useAnchorField } from "../utils/projects";
import ButtonLoader from "./button-loader";
import Input from "./input";

const AnchorTextSchema = z.object({
  anchorText: z.string().min(1, "this field cannot be blank"),
});

const AnchorField = ({ anchorFieldRef, paragraphRef }, ref) => {
  const {
    state: { generatedHeading, targetTitleUrlTerm, chosenTitleUrl },
    dispatch,
  } = useAppState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AnchorTextSchema),
  });

  // mutation
  const mutation = useAnchorField(paragraphRef, reset);

  const handleAnchorSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <section ref={anchorFieldRef}>
      <div className=" mx-auto my-10 flex min-h-80v items-center justify-center px-6 pt-20">
        <div className=" flex w-full max-w-lg items-center  justify-center rounded-md py-6  shadow-lg">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit(handleAnchorSubmit)}
          >
            {/*     <h1 className="mt-3 font-semibold capitalize text-gray-800 text-2xl  sm:text-3xl">
              Input Your Anchor Text
            </h1> */}
            <Input
              id={"anchorField"}
              label={"Anchor Text"}
              // infoText={"aka, Anchor Text"}
              type={"text"}
              placeholder={"Example: best interlinking tool"}
              tooltipText={" <a href='target title'>lazy turtle</a>"}
              inputProps={register("anchorText")}
              error={errors.anchorText?.message as string}
            />

            <div className="mt-4">
              <button
                className={`btn ${
                  mutation.isLoading ? "btn-disabled " : "btn-primary "
                }`}
                disabled={
                  mutation.isLoading ? true : !generatedHeading ? true : false
                }
              >
                {mutation.isLoading ? (
                  <ButtonLoader loadingText={"Generating Paragraph..."} />
                ) : (
                  "Generate Paragraph"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(AnchorField);
