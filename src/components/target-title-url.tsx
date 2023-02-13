/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { zodResolver } from "@hookform/resolvers/zod";
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
const TargetTitleUrl = ({ relevantTermRef }) => {
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
      <div className="mb-10 flex min-h-80v items-center justify-center ">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handleTargetTitleURLSubmit)}
        >
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Target Title and url here
          </h1>
          <Input
            id="target Title"
            label="Target Title"
            type={"text"}
            placeholder={"target Title"}
            infoText={"aka, Target Post"}
            tooltipText={"aka, Target Post"}
            inputProps={register("targetTitle")}
            error={errors.targetTitle?.message as string}
          />
          <Input
            id="target URL"
            label="Target URL"
            type={"text"}
            placeholder={"target URL"}
            inputProps={register("targetURL")}
            error={errors.targetURL?.message as string}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Next</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TargetTitleUrl;
