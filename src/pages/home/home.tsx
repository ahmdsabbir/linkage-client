import Login from "../../features/authrizaton-authentication/Login";
import Register from "../../features/authrizaton-authentication/register";
import CenterContent from "./center-content";
import ComingSoon from "./coming-soon";
import Features from "./features";
import Header from "./header";
import SideImage from "./side-image";

const Home = () => {
  return (
    <>
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
