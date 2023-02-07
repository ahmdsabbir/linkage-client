import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto break-words">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
