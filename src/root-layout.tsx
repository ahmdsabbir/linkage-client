import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container  mx-auto break-words">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
