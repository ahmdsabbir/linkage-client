import Input from "../../components/input";
import Login from "../../features/authrizaton-authentication/Login";
import Register from "../../features/authrizaton-authentication/register";
import CenterContent from "./center-content";
import ComingSoon from "./coming-soon";
import SinglePage from "./dashboard/single-page";
import Features from "./features";
import Header from "./header";
import SideImage from "./side-image";

const Home = () => {
  return (
    <>
      <SinglePage />
      <Input
        id={"relevantTerm"}
        label={"Relevant Term"}
        infoText={"aka, Target Post"}
        type={"text"}
        placeholder={"relevant term"}
        svgIcon={
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 h-6 w-6 text-gray-700 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
        }
      />
      <Login />
      <Register />
      <Header />
      <CenterContent />
      <Features />
      <SideImage />
      <ComingSoon />
    </>
  );
};

export default Home;
