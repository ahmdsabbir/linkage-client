interface HeadingOrParagraph {
  sectionName: string;
  sectionHelperText: string;
  generatedHeading?: string;
  generateParagraph?: string;
}
const HeadingOrParagraph = ({
  sectionName,
  sectionHelperText,
  generatedHeading,
  generateParagraph,
}: HeadingOrParagraph) => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl overflow-hidden rounded border border-gray-100 bg-white text-gray-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <header>
            <h3 className=" text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
              {sectionName ? sectionName : "use a section name"}
            </h3>
            <p className="mb-4">
              {sectionHelperText
                ? sectionHelperText
                : "use a section helper text"}
            </p>
          </header>
          <body>
            {generatedHeading && (
              <p className=" text-xl font-medium text-slate-700">
                {generatedHeading}
              </p>
            )}
            {generateParagraph && (
              <p className=" text-xl  text-gray-400">
                <p>
                  AI Generated Relevant Paragraph. So, given a user id, this
                  method creates and returns a token from the payload and the
                  secret key set in the config.py file.{" "}
                  <a href="http://localhost:3000/">given anchor text</a>
                  The payload is where we add metadata about the token and
                  information about the user. This info is often referred to as
                </p>
              </p>
            )}
          </body>
        </div>
      </div>
    </div>
  );
};

export default HeadingOrParagraph;
