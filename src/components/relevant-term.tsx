import Input from "./input";

const RelevantTerm = () => {
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Relevant Term
          </h1>
          <Input
            id={"relevantTerm"}
            label={"Relevant Term"}
            infoText={"aka, Target Post"}
            type={"text"}
            placeholder={"relevant term"}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Get Suggestions</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RelevantTerm;
