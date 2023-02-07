import Navbar from "../../components/navbar";
import CenterContent from "./center-content";
import ComingSoon from "./coming-soon";
import Features from "./features";
import Header from "./header";
import SideImage from "./side-image";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CenterContent />
      <Features />
      <SideImage />
      <ComingSoon />
    </>
  );
};

export default Home;
