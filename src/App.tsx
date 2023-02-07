import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateProject from "./components/create-project";
import EditProject from "./components/edit-project";
import ErrorPage from "./components/error-page";
import Login from "./features/authorization-authentication/Login";
import Register from "./features/authorization-authentication/register";
import Home from "./pages/home";
import AllProjects from "./pages/user-dashboard/all-projects";
import DashboardDetails from "./pages/user-dashboard/dashboard-details";
import DashboardLayout from "./pages/user-dashboard/dashboard-layout";
import SinglePage from "./pages/user-dashboard/single-page";
import RootLayout from "./root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      {/* user dashboard */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardDetails />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="edit-project" element={<EditProject />} />
        <Route path="all-projects" element={<AllProjects />} />
        <Route path="single-page" element={<SinglePage />} />
      </Route>

      {/* user authentication */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      {/* <TestingCard /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
