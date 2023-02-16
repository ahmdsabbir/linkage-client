/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useAppState } from "../context/update-post-context";
import EditableText from "./editable-text";

type FormValues = {
  generatedHeading?: string | null;
  generatedParagraph?: string | null;
};

interface HeadingOrParagraph {
  sectionName: string;
  sectionHelperText: string;
  generatedHeading?: string;
  generatedParagraph?: string;
}
const HeadingOrParagraph = ({
  sectionName,
  sectionHelperText,
  generatedHeading,
  generatedParagraph,
}: HeadingOrParagraph) => {
  const { dispatch } = useAppState();
  // console.log(generatedHeading);

  /* 
    dispatch({
      type: "generatedHeading",
      payload: value,
    }); */

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
        <>
          {generatedHeading && (
            <EditableText
              id={"generatedHeading"}
              fieldValue={generatedHeading}
              headingHeight={"min-h-10v"}
              handleBlur={async (e) =>
                await dispatch({
                  type: "generatedHeading",
                  payload: e.target.value,
                })
              }
            />
          )}

          {generatedParagraph && (
            <EditableText
              id={"generatedParagraph"}
              headingHeight={"min-h-40v"}
              fieldValue={generatedParagraph}
              handleBlur={async (e) =>
                await dispatch({
                  type: "generatedParagraph",
                  payload: e.target.value,
                })
              }
            />
          )}
        </>
      </div>
    </div>
  );
};

export default HeadingOrParagraph;
