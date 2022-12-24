import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./components/authrizaton-authentication/Login";
import Register from "./components/authrizaton-authentication/register";

import AboutUs from "./components/Pages/about-us";
import Contact from "./components/Pages/contact";
import Dashboard from "./components/Pages/dashboard/Dashboard";
import AllProjects from "./components/Pages/dashboard/user-dashboard/all-projects";
import ProjectQueryLayout from "./components/Pages/dashboard/user-dashboard/project-query-layout";
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
        <Route path="all-projects" element={<AllProjects />} />
        <Route
          path="all-projects/project-query-layout"
          element={<ProjectQueryLayout />}
        />
        <Route path="user-details" element={<UserDetails />} />
      </Route>

      {/* user authentication */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
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
