import React from "react";
import Spinner from "../spinner";
import ChosenTitleUrl from "./dashboard/user-dashboard/chosen-title-url";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center mb-5">Home page</h1>
      <Spinner />
      <ChosenTitleUrl />
    </div>
  );
};

export default Home;
