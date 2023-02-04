import Login from "../../features/authrizaton-authentication/Login";
import CenterContent from "./center-content";
import ComingSoon from "./coming-soon";
import Features from "./features";
import Header from "./header";
import SideImage from "./side-image";

const Home = () => {
  return (
    <>
      <Login
        emailIcon={
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
        }
        passwordIcon={
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
        }
      />
      {/* <Register /> */}
      <Header />
      <CenterContent />
      <Features />
      <SideImage />
      <ComingSoon />
    </>
  );
};

export default Home;
