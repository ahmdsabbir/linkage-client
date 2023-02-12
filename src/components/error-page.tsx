import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-3 text-gray-700 xl:gap-6">
      <h2 className="text-xl font-bold sm:text-2xl md:text-5xl lg:text-9xl">
        {error.status}
      </h2>
      <p className="mb-2 text-xl font-extrabold sm:text-5xl xl:text-7xl">
        Sorry!
      </p>
      <p className="text-sm  text-black/60 md:text-base xl:text-lg">
        {error ? error.error?.message : "Something went wrong"}
      </p>
      <button onClick={() => navigate(-1)} className="btn-primary btn">
        Go Back
      </button>
      <button onClick={() => navigate("/")} className="btn-primary btn">
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
