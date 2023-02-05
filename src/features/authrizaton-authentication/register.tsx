import Input from "../../components/input";

const Register = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
          <div className="mx-auto flex justify-center">
            <img
              className="h-7 w-auto sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="http://localhost:3000/"
              className="w-1/3 border-b-2 border-blue-500 pb-4 text-center font-medium capitalize text-gray-800 dark:border-blue-400 dark:text-white"
            >
              sign up
            </a>
          </div>

          <Input
            type={"text"}
            placeholder={"Username"}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
            }
          />

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
          />
          <Input
            type={"password"}
            placeholder={"confirm password "}
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
          />

          <div className="mt-6">
            <button className="w-full transform rounded-lg bg-primary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>
            <div className="mt-6 text-center ">
              <a
                href="http://localhost:3000/"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
