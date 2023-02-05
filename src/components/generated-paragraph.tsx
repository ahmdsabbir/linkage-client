import HeadingOrParagraph from "./heading-or-paragraph";

const GeneratedParagraph = () => {
  return (
    <>
      <HeadingOrParagraph
        sectionName={"Generated Paragraph"}
        sectionHelperText={`Following Section was Generated. Insert It Wherever You’d like on Your Post`}
        generateParagraph={`<p>AI Generated Relevant Paragraph. So, given a user id, this method creates and returns a token from the payload and the secret key set in the config.py file. given anchor text</a>The payload is where we add metadata about  the token and information about the user. This info is often referred to as </p>`}
      />
    </>
  );
};

export default GeneratedParagraph;
