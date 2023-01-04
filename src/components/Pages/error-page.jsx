import React from "react";
import { useRouteError } from "react-router-dom";
import errorImage from "../../assets/404-error.svg";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-screen items-center p-6">
      <div className="flex items-center flex-col gap-3 xl:gap-6">
        <h2 className="text-9xl font-bold">{error.status}</h2>
        <p className="text-3xl sm:text-5xl xl:text-7xl font-semibold mb-2">
          Page Not Found
        </p>
        <p className="text-black/60  text-sm md:text-base xl:text-lg">
          {error.error.message}
        </p>
      </div>
      <div className="w-full h-screen">
        <img src={errorImage} className="max-w-full md:h-full" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
