import Login from "../../features/authorization-authentication/Login";
import Register from "../../features/authorization-authentication/register";
import SinglePage from "../user-dashboard/single-page";
import CenterContent from "./center-content";
import ComingSoon from "./coming-soon";
import Features from "./features";
import Header from "./header";
import SideImage from "./side-image";
import Sidebar from "./sidebar";

const Home = () => {
  return (
    <>
      <Sidebar />
      <SinglePage />

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
