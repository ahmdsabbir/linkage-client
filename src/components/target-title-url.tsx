/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAppState } from "../context/update-post-context";
import Input from "./input";

const TargetTitleUrlSchema = z.object({
  targetTitle: z.string().min(4, "post title must be more than 4 characters!"),
  targetURL: z.string().url(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TargetTitleUrl = ({ relevantTermRef, targetTitleRef }, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TargetTitleUrlSchema),
  });

  const navigate = useNavigate();
  const { state, dispatch } = useAppState();

  const handleTargetTitleURLSubmit = async (data) => {
    if (data.targetTitle && data.targetURL) {
      await dispatch({ type: "targetTitleUrl", payload: data });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      relevantTermRef.current.scrollIntoView({ behavior: "smooth" });
      reset();
    }
  };

  return (
    <section>
      <div
        ref={targetTitleRef}
        className="mb-10 flex min-h-80v items-center justify-center "
      >
        <div className=" flex w-full max-w-lg items-center  justify-center rounded-md py-6  shadow-lg">
          <form
            className="w-full max-w-md"
            onSubmit={handleSubmit(handleTargetTitleURLSubmit)}
          >
            <Input
              id="target Title"
              label="Target Post Title"
              type={"text"}
              placeholder={"example: My Awesome Post"}
              // infoText={"aka, Target Post"}
              tooltipText={
                "Insert the title/main topic of the post you’re trying to build links for. Our AI will make predictions based on this title, thus you should change/modify "
              }
              inputProps={register("targetTitle")}
              error={errors.targetTitle?.message as string}
            />
            <Input
              id="target URL"
              label="Target Post URL"
              type={"text"}
              placeholder={"example: https://example.com/my-awesome-post"}
              tooltipText={
                "Insert the URL of the post you’re trying to build links for. This URL will "
              }
              inputProps={register("targetURL")}
              error={errors.targetURL?.message as string}
            />
            <div className="mt-4">
              <button className="btn-primary btn">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(TargetTitleUrl);
