/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Input from "../../../components/input";

const emailValidationSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailValidationSchema),
  });
  const navigate = useNavigate();
  const handleSubmitResetPassword = (data) => {
    navigate("/reset-password/confirmation");
  };
  return (
    <div className="grid h-screen place-self-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-5 text-center font-semibold text-5xl">
          Enter Your Email
        </h2>
        <form onSubmit={handleSubmit(handleSubmitResetPassword)}>
          <Input
            type={"email"}
            placeholder={"Email address"}
            svgIcon={
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-3 h-6 w-6 text-gray-700 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            }
            inputProps={register("email")}
            error={errors.email?.message as string}
          />

          <div className="form-control mt-6">
            <button className="btn-primary btn w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
