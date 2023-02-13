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
import History from "./pages/dummy/History";
import Reporters from "./pages/dummy/reporters";
import Settings from "./pages/dummy/settings";
import Users from "./pages/dummy/users";
import Home from "./pages/home";
import AllProjects from "./pages/user-dashboard/all-projects";
import Basic from "./pages/user-dashboard/basic";
import DashboardDetails from "./pages/user-dashboard/dashboard-details";
import DashboardLayout from "./pages/user-dashboard/dashboard-layout";
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
        <Route path="basic" element={<Basic />} />
        <Route path="history" element={<History />} />
        <Route path="reporters" element={<Reporters />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
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
