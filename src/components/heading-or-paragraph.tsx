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
    <div className="my-10 max-w-xl rounded border border-gray-100 bg-white text-gray-500 shadow-md shadow-slate-200">
      <div className="p-6">
        <header>
          <h3
            className={` font-semibold capitalize    ${
              generatedHeading ? "text-2xl text-gray-700" : "text-2xl"
            }`}
          >
            {sectionName ? sectionName : "use a section name"}
          </h3>
          <p className="mb-4">
            {sectionHelperText
              ? sectionHelperText
              : "use a section helper text"}
          </p>
        </header>
        <div className="">
          {generatedHeading && (
            <p className="py-4 text-2xl  font-medium text-accent">
              {generatedHeading}
            </p>
          )}
          {generateParagraph && generateParagraph}
        </div>
      </div>
    </div>
  );
};

export default HeadingOrParagraph;
