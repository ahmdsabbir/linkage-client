/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Input from "../../../components/input";

const NewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Please choose a longer password")
      .max(256, "Consider using a short password"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "password did not match",
  });

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(NewPasswordSchema) });
  const navigate = useNavigate();
  const handleSubmitNewPassword = (data) => {
    console.log(data);
    // navigate("/reset-password/confirmation");
  };
  return (
    <div className="grid h-screen place-self-center">
      <div className="grid place-self-center ">
        <h2 className="text-center text-gray-700 text-4xl">
          Enter Your New Password
        </h2>
        <form
          onSubmit={handleSubmit(handleSubmitNewPassword)}
          className="space-y-2"
        >
          <Input
            label="New password"
            type="password"
            placeholder="password"
            inputProps={register("password")}
            error={errors.password?.message as string}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="confirm password"
            inputProps={register("confirm")}
          />
          <div className="form-control mt-6">
            <button className="btn-primary btn w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
