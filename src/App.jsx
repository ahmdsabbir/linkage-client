import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import EmailConfirmationModal from "./components/authrizaton-authentication/email-confirmation-modal";

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
import GeneratedSectionLayout from "./components/Pages/dashboard/user-dashboard/generated-section-layout";
import NewProject from "./components/Pages/dashboard/user-dashboard/new-project";
import ProjectStarterLayout from "./components/Pages/dashboard/user-dashboard/project-starter-layout";
import RelevantTermLayout from "./components/Pages/dashboard/user-dashboard/relevant-term-layout";
import Suggestions from "./components/Pages/dashboard/user-dashboard/suggestions";
import UpdateContent from "./components/Pages/dashboard/user-dashboard/update-content";
import UserDetails from "./components/Pages/dashboard/user-dashboard/user-details";
import ErrorPage from "./components/Pages/error-page";
import Home from "./components/Pages/home";
import Unauthorized from "./components/Pages/unauthorized";
import RequireAuth from "./components/require-auth";
import RootLayout from "./components/root-layout/root-layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      {/* user authentication */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="verify" element={<EmailConfirmationModal />} />

      {/* reset password */}
      <Route path="reset-password" element={<ResetPasswordLayout />}>
        <Route index element={<ResetPassword />} />
        <Route path="new-password" element={<NewPasword />} />
        <Route path="confirmation" element={<ResetPasswordConfirmation />} />
      </Route>

      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />

      {/* user protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<AllProjects />} />

          {/* project starter layout nested route starts */}
          <Route
            path="project-starter/:name"
            element={<ProjectStarterLayout />}
          >
            <Route index element={<EnterPostTitle />} />
            <Route path="relevant" element={<RelevantTermLayout />} />
            <Route path="suggestions" element={<Suggestions />} />
            <Route
              path="generated-heading"
              element={<GeneratedSectionLayout />}
            />

            <Route path="update-content" element={<UpdateContent />} />

            {/* edit project details */}
            <Route
              path="edit-project-details"
              element={<EditProjectDetails />}
            />
          </Route>
          {/* project starter layout nested route ends */}

          <Route path="user-details" element={<UserDetails />} />
          {/* start a new project */}
          <Route path="new-project" element={<NewProject />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
