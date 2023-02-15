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
              generatedHeading ? "text-gray-700 text-lg" : "text-lg"
            }`}
          >
            {sectionName && sectionName}
          </h3>
          <p className="mb-4">{sectionHelperText && sectionHelperText}</p>
        </header>
        <div className="">
          {generatedHeading && (
            <p className="text-md py-1  font-medium text-accent">
              {generatedHeading}
            </p>
          )}
          {generateParagraph && <code className=""> {generateParagraph}</code>}
        </div>
      </div>
    </div>
  );
};

export default HeadingOrParagraph;
