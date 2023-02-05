import Input from "./input";

const TargetTitleUrl = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Target Title and url here
          </h1>
          <Input
            id="targetTitle"
            label="Target Title"
            type={"text"}
            placeholder={"Target Title"}
            infoText={"aka, Target Post"}
          />
          <Input
            id="TargetURL"
            label="Target URL"
            type={"text"}
            placeholder={"Target URL"}
          />

          <div className="mt-6">
            <button className="w-full transform rounded bg-primary px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign in
            </button>
            <button className="btn-primary btn">Sign in</button>

            <div className="mt-6 text-center ">
              <a
                href="http://localhost:3000/"
                className="text-sm text-dodger-blue-500 hover:underline"
              >
                Don’t have an account yet? Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TargetTitleUrl;
