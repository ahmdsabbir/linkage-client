interface GeneratedHeading {
  generatedHeading: string;
}
const GeneratedHeading = ({ generatedHeading }: GeneratedHeading) => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl overflow-hidden rounded border border-gray-100 bg-white text-gray-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <header>
            <h3 className=" text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
              Generated Heading
            </h3>
            <p className="mb-4">AI Generated Relevant Heading</p>
          </header>
          <body>
            <p className=" text-xl font-medium text-slate-700">
              {generatedHeading}
            </p>
          </body>
        </div>
      </div>
    </div>
  );
};

export default GeneratedHeading;
