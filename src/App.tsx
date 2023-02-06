import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import Login from "./features/authorization-authentication/Login";
import Register from "./features/authorization-authentication/register";
import Home from "./pages/home/home";
import RootLayout from "./root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      {/* user authentication */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="container mx-auto break-words">
      {/* <TestingCard /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
