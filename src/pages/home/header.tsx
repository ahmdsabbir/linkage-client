const Header = () => {
  return (
    <section className="relative bg-white">
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="font-bold text-5xl">Hello there</h1>
            <p className="py-6">
              You will need our plugin to update your post directly from our
              site. Download the plugin below for a seamless experience!
            </p>
            <button className="btn-primary btn">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto max-w-lg">
          <h1 className="font-semibold text-gray-800 text-3xl  lg:text-4xl"></h1>

          {/* <p className="mt-6 font-bold text-gray-600">
            You will need our plugin to update your post directly from our site.
            Download the plugin below for a seamless experience!
          </p> */}

          {/* <p className="mt-3 text-sm text-gray-400 ">No credit card required</p> */}
          <h1 className="text-center font-extrabold capitalize text-xl lg:text-3xl 2xl:text-5xl">
            <span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent ">
              AI-powered
            </span>
            <br />
            <span className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent  ">
              interlinking
            </span>
          </h1>
          <span className="text-gray-500 text-base">
            Solutions to all of your interlinking problems in one place
          </span>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            alt=""
            className="h-96 w-full rounded-xl object-cover lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>

      <div className="hero min-h-50v ">
        <div className="hero-content grid grid-cols-1 flex-col gap-4 md:grid-cols-2 md:gap-6 lg:flex-row lg:gap-10">
          <img
            src="https://images.unsplash.com/photo-1637919649104-c292cbbbd97b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className=" h-auto w-auto rounded-lg"
            alt="wordpress"
          />
          <div className="text-gray-600">
            <h1 className="font-bold capitalize text-gray-800 text-2xl">
              Tired of manually building internal links on your WordPress site?
            </h1>
            <div className="text-lg">
              <p className="py-6 text-gray-600">
                It can be a time-consuming and daunting task, especially if you
                have a large website. But don't worry,{" "}
                <span className="font-medium text-primary ">Linkages</span> can
                help!
              </p>
              <p className="py-6 text-gray-600">
                Follow these simple steps to start building internal links with
                Linkages:
              </p>
              <ol className="ml-4 space-y-3 ">
                <li>1. Sign-up and create your account</li>
                <li>2. Install our WordPress plugin to your site </li>
                <li>
                  3. Create a new project from your dashboard and provide your
                  WordPress username and Application password
                </li>
                <li>
                  4. Select either the Basic Workflow or Silo Workflow and start
                  building internal links
                </li>
              </ol>
              <p className="mt-4">
                With our tool, you can build internal links quickly and easily,
                without ever visiting your WordPress site. Say goodbye to manual
                link-building and hello to a more efficient and effective way of
                optimizing your site's internal links. Try our tool today and
                see the difference it can make for your website's performance!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-50v ">
        <div className="hero-content grid grid-cols-1 flex-col gap-4 md:grid-cols-2 lg:flex-row">
          <img
            src="https://cdn-icons-png.flaticon.com/512/59/59137.png"
            className="max-w-sm rounded-lg "
            alt="wordpress"
          />
          <div>
            <h1 className="font-bold capitalize text-gray-800 text-3xl">
              Just a small step left!
            </h1>
            <p className="py-6 text-gray-600 text-base">
              {" "}
              You will need to install our small plugin to update your post
              directly from our site. Download the plugin below for a seamless
              experience!
            </p>
            <a
              className="btn-primary btn"
              href={
                "https://drive.google.com/file/d/1b6k106Kv8qEa-NxugaG9Pqzl_AkBZIu6/view"
              }
              target="_blank"
              rel="noreferrer"
            >
              Download Plugin
            </a>
          </div>
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
