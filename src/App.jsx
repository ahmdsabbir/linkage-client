import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import Login from "./components/authrizaton-authentication/Login";
import Register from "./components/authrizaton-authentication/register";
import NewPasword from "./components/authrizaton-authentication/reset-password/new-password";
import ResetPassword from "./components/authrizaton-authentication/reset-password/reset-password";
import ResetPasswordConfirmation from "./components/authrizaton-authentication/reset-password/reset-password-confirmation";
import ResetPasswordLayout from "./components/authrizaton-authentication/reset-password/reset-password-layout";

import AboutUs from "./components/Pages/about-us";
import Contact from "./components/Pages/contact";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import AllProjects from "./components/Pages/dashboard/user-dashboard/all-projects";
import EditProjectDetails from "./components/Pages/dashboard/user-dashboard/edit-project-details";
import EnterPostTitle from "./components/Pages/dashboard/user-dashboard/enter-post-title";
import ProjectStarterLayout from "./components/Pages/dashboard/user-dashboard/project-starter-layout";
import RelevantTerm from "./components/Pages/dashboard/user-dashboard/relevant-term";
import Suggestions from "./components/Pages/dashboard/user-dashboard/suggestions";
import UserDetails from "./components/Pages/dashboard/user-dashboard/user-details";
import Home from "./components/Pages/home";
import RootLayout from "./components/root-layout/root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />

      {/* user routes */}
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<AllProjects />} />

        {/* project starter layout nested route starts */}
        <Route path="project-starter/:id" element={<ProjectStarterLayout />}>
          <Route index element={<EnterPostTitle />} />
          <Route path="relevant" element={<RelevantTerm />} />
          <Route path="suggestions" element={<Suggestions />} />
        </Route>
        {/* project starter layout nested route ends */}

        <Route path="user-details" element={<UserDetails />} />
      </Route>

      {/* user authentication */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* reset password */}

      <Route path="reset-password" element={<ResetPasswordLayout />}>
        <Route index element={<ResetPassword />} />
        <Route path="new-password" element={<NewPasword />} />
        <Route path="confirmation" element={<ResetPasswordConfirmation />} />
      </Route>
      <Route path="edit-project-details" element={<EditProjectDetails />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
