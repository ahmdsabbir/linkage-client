const ArticleHeadingCard = () => {
  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center px-6">
      <div className=" max-w-xl  rounded border border-primary/25  bg-white text-gray-600 hover:bg-primary/5 hover:text-gray-900 ">
        <div className="relative flex items-center justify-between  p-6">
          {/* card will have h3 and also h2. H3 will have left margin  */}
          <h2 className=" mr-4  text-lg text-gray-400">
            AI Generated Relevant Paragraph. So, given a user id, this method
            creates and returns a token from the payload and the secret key set
            in the config.py file.
          </h2>
          {/* <h3 className=" mr-4  text-lg text-gray-400">
            AI Generated Relevant Paragraph. So, given a user id, this method
            creates and returns a token from the payload and the secret key set
            in the config.py file.
          </h3> */}
          <button className="top-3/2 btn-primary btn absolute -right-7 border-primary/20 bg-white p-2 text-primary hover:text-white">
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
