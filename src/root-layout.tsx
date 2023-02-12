import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className=" mx-auto  max-w-screen-2xl break-words">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
