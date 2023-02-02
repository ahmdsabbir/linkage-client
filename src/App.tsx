import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Documentation from "./components/documentation";
import ErrorPage from "./components/error-page";
import Test from "./components/test";
import Home from "./pages/home/home";
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
      <Home />
      <Documentation />
      <RouterProvider router={router} />
      <Test />
    </div>
  );
};

export default App;
