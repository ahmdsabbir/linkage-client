const Login = ({ emailIcon, passwordIcon }: never) => {
  const isIcon = true;

  return (
    <div>
      {/* login form */}
      {/* 
      <div>
        <section className="bg-white">
          <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
            <form className="w-full max-w-md">
              <img
                className="h-7 w-auto sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />

              <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800 dark:text-white sm:text-3xl">
                sign In
              </h1>
              <div className="relative mt-8 flex items-center">
                {isIcon && emailIcon}

                <input
                  type="email"
                  className={`block w-full rounded bg-dodger-blue/5 py-3  ${
                    isIcon ? "px-11" : "px-4"
                  } text-[#1B174D] focus:border-dodger-blue-400 focus:outline-none focus:ring focus:ring-dodger-blue-300 focus:ring-opacity-40  `}
                  placeholder="Email address"
                />
              </div>
              <div className="relative mt-4 flex items-center">
                {isIcon && passwordIcon}

                <input
                  type="password"
                  className="block w-full rounded  bg-dodger-blue/5 px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-dodger-blue-300 focus:ring-opacity-40 dark:border-gray-600  "
                  placeholder="Password"
                />
              </div>
              <div className="mt-6">
                <button className="w-full transform rounded bg-dodger-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>

                <div className="mt-6 text-center ">
                  <a
                    href="http://localhost:3000/"
                    className="text-sm text-dodger-blue-500 hover:underline dark:text-blue-400"
                  >
                    Don’t have an account yet? Sign up
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Login;
