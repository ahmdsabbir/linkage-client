import Input from "./input";

const TargetTitleUrl = () => {
  return (
    <section>
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

          <div className="mt-4">
            <button className="btn-primary btn">Next</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TargetTitleUrl;
