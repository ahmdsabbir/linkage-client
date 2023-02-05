const ArticleHeadingCard = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div className="relative max-w-xl  rounded border border-primary/25  bg-white text-gray-500 ">
        <div className=" flex items-center justify-between  p-6">
          <h2 className=" mr-4  text-lg text-gray-400">
            AI Generated Relevant Paragraph. So, given a user id, this method
            creates and returns a token from the payload and the secret key set
            in the config.py file.
          </h2>
          <button className="btn-primary btn absolute top-10 -right-7 border-primary/20 bg-white p-4 text-primary hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeadingCard;
