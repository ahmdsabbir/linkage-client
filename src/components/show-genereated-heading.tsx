/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

const ShowGeneratedHeading = ({ paragraph, margin }) => {
  return (
    <>
      <div
        className={`${margin} mb-2 max-w-xl rounded border border-primary/25 bg-white bg-primary/5 p-6 text-gray-600 hover:text-gray-900`}
      >
        {paragraph}
      </div>
    </>
  );
};

export default ShowGeneratedHeading;
