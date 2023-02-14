import { Link } from "react-router-dom";

const SideImage = () => {
  return (
    <div className="lg:flex">
      <div className="order-2 flex w-full items-center justify-center px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className=" max-w-xl">
          <h2 className="font-semibold text-gray-800 text-3xl lg:text-4xl">
            <span className="text-blue-500 ">Boost</span> Your Website's SEO
            with AI-Powered Internal Linking
          </h2>
          <p className="mt-4 text-gray-500 text-sm lg:text-base">
            Internal linking is a critical component of website SEO, and our
            AI-powered internal linking tool takes it to the next level. With
            our tool, you can easily optimize your internal links for search
            engines, clustering your keywords, gaining topical relevancy, and
            choosing your preferred anchor text. The result? Improved search
            engine visibility and higher organic traffic to your site.
          </p>
          <div className="mt-6 flex flex-col space-y-3 lg:flex-row lg:space-y-0">
            <Link
              to="/login"
              className="block transform rounded-md bg-gray-900 px-5 py-2 text-center font-medium tracking-wider text-white transition-colors duration-300 text-sm hover:bg-gray-700"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="block transform rounded-md bg-gray-200 px-5 py-2 text-center font-medium tracking-wider text-gray-700 transition-colors duration-300 text-sm hover:bg-gray-300 lg:mx-4"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="order-1 h-64 w-full lg:h-auto lg:w-1/2">
        <div
          className="h-full w-full bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80)",
          }}
        >
          <div className="h-full w-full bg-black opacity-25" />
        </div>
      </div>
    </div>
  );
};

export default SideImage;
