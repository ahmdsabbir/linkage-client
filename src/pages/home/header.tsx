const Header = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
            AI powered interlinking
          </h1>
          <span className="text-gray-500">
            Solutions to all of your interlinking problems in one place
          </span>
          <p className="mt-6 text-gray-500 "></p>
          <button className="btn-primary btn mt-6">Explore for more</button>
          {/* <p className="mt-3 text-sm text-gray-400 ">No credit card required</p> */}
          <h1 className="text-center text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
            <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Alpha
            </span>
            <br />
            <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
              Version
            </span>
          </h1>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            alt=""
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>

      {/* sidebar */}
      {/* <section className="absolute inset-y-0 left-0 w-60 bg-gray-600 py-28  px-0 text-white">
        <div
          className="flex-column z-1 visibility -bottom-128 fixed inset-x-0 -top-28 flex h-full 
        "
        >
          <h1>text</h1>
        </div>
      </section> */}
    </section>
  );
};

export default Header;
