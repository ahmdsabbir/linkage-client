import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
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
      {/* <TestingCard /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
