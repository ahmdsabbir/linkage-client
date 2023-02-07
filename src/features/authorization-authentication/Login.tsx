import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import Input from "../../components/input";

const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(64, "Consider using a short password"),
});

type SignupFormValue = z.infer<typeof LoginSchema>;

interface HandLoginSubmitProps {
  data: object;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValue>({ resolver: zodResolver(LoginSchema) });

  const handLoginSubmit = (data: HandLoginSubmitProps) => {
    console.log("submit", data);
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form
          className="w-full max-w-md"
          onSubmit={handleSubmit(handLoginSubmit)}
        >
          <img
            className="h-7 w-auto sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />

          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            sign In
          </h1>
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
          <Input
            type={"password"}
            placeholder={"password here"}
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            }
            inputProps={register("password")}
            error={errors.password?.message as string}
          />

          <div className="mt-6">
            <button className="btn-primary btn w-full">Sign in</button>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center ">
        <Link to={"/dashboard"} className=" btn w-full bg-accent">
          Sign in Test
        </Link>
        <Link
          to="/register"
          className="text-sm text-dodger-blue-500 hover:underline"
        >
          Don’t have an account yet? Register
        </Link>
      </div>
    </section>
  );
};

export default Login;
