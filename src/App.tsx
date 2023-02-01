import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Documentation from "./documentation";
import ErrorPage from "./error-page";
import RootLayout from "./root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<ErrorPage />}
    ></Route>
  )
);

const App = () => {
  return (
    <div className="container mx-auto">
      <Documentation />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
