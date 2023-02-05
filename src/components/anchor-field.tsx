import Input from "./input";

const AnchorField = () => {
  return (
    <section>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
        <form className="w-full max-w-md">
          <h1 className="mt-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
            Input Your Anchor Text
          </h1>
          <Input
            id={"anchorField"}
            label={"Anchor Text"}
            infoText={"aka, Anchor Text"}
            type={"text"}
            placeholder={"Anchor Text"}
          />

          <div className="mt-4">
            <button className="btn-primary btn">Next</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AnchorField;
