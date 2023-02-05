const ChosenTitleUrl = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div>
        <h2 className="my-3 text-2xl font-semibold capitalize text-gray-800  sm:text-3xl">
          Source Title and Url you have chosen
        </h2>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="ChosenTitle"
              className="label flex-col items-baseline"
            >
              <span className="label-text text-base font-medium text-gray-700">
                ChosenTitle
              </span>
            </label>
            <textarea
              placeholder="chosen title..."
              className="  block h-32 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              defaultValue={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
              }
            />
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
              You can edit the post title as your needs before you hit the next
              button !
            </p>
          </div>
          <div>
            <label
              htmlFor="ChosenURL"
              className="label flex-col items-baseline"
            >
              <span className="label-text text-base font-medium text-gray-700">
                ChosenURL
              </span>
            </label>
            <textarea
              placeholder="chosen title..."
              className="  block h-32 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 "
              defaultValue={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!"
              }
            />
          </div>
        </div>
        {/* button */}
        <div className="mt-6">
          <button className="btn-primary btn ">Generate Heading</button>
        </div>
      </div>
    </div>
  );
};

export default ChosenTitleUrl;
