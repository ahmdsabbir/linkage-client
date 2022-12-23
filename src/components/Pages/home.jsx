import React from "react";
import ChosenTitleUrl from "./dashboard/user-dashboard/chosen-title-url";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center">Home page</h1>
      <ChosenTitleUrl />
    </div>
  );
};

export default Home;
