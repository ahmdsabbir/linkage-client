const PillarPostCard2 = () => {
  return (
    <div className="mt-4 flex w-full max-w-lg transform flex-col  justify-between space-y-8 rounded-md bg-white p-6 shadow-md shadow-primary/10 transition-all">
      <div className=" space-y-2">
        {/* pillar post headline */}
        <div className=" flex flex-col space-y-0 rounded bg-accent/5 px-2 py-4">
          <span className="font-bold text-gray-700 text-lg">Pillar Post</span>
          <span className=" font-semibold text-gray-600 text-base ">
            {"5 Best Pillars You Can Buy on Amazon?"}
          </span>
        </div>
        {/* support post headline */}
        <div className="flex flex-col ">
          {/* support post headline */}
          <span className="mb-4 font-bold capitalize text-gray-700 text-base">
            Support Post
          </span>
          {/* support post lists */}
          <div className="space-y-2">
            <div className="flex items-start gap-2 font-semibold text-gray-500 text-base">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
              <span> {"Why Is This Pillar So Tall?"}</span>
            </div>
            <div className="flex items-start gap-2 font-semibold text-gray-500 text-base">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
              <span>
                {" "}
                {
                  "Es va popularitzar l'any 1960 amb el llançament de fulls Letraset que contenien passatges de Lorem Ipsum, i més recentment amb programari"
                }
              </span>
            </div>
            <div className="flex items-start gap-2 font-semibold text-gray-500 text-base">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
              <span> {"How Long Does a Pillar Live?"}</span>
            </div>
          </div>
        </div>
      </div>
      {/* CTA --> call to action */}
      <div className="  flex items-center justify-between  ">
        <button className="hover:text-bold inline-flex items-center  justify-center space-x-1 rounded border border-primary/25 p-1 font-medium text-primary text-sm hover:bg-primary/10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
          <span> Start</span>
        </button>

        <button className="hover:text-bold inline-flex items-center  justify-center space-x-1 rounded border border-accent/25 p-1 font-medium text-accent text-sm hover:bg-accent/10">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </span>
          <span> Add Support</span>
        </button>
        {/* <button className="hover:text-bold inline-flex space-x-1 rounded border border-error/25 p-1 font-medium text-error hover:bg-error/10 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
            <span> Delete</span>
          </button> */}
      </div>
    </div>
  );
};

export default PillarPostCard2;
