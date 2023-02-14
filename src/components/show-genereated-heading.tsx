/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

const ShowGeneratedHeading = ({ paragraph, margin, generatedHeading }) => {
  return (
    <>
      <div
        className={`${margin} mb-2 max-w-xl rounded border border-primary/25 bg-white bg-primary/5 p-6 text-gray-600 hover:text-gray-900`}
      >
        <h2 className="mb-3 text-base">{generatedHeading}</h2>
        <p className="text-gray-500"> {paragraph}</p>
      </div>
    </>
  );
};

export default ShowGeneratedHeading;
