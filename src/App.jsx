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
        <Route
          path="project-starter/:id"
          element={<ProjectStarterLayout />}
        ></Route>
        <Route
          index
          // path="all-projects/project-starter-layout/"
          element={<EnterPostTitle />}
        />
        <Route path="project-starter/relevant" element={<RelevantTerm />} />
        <Route path="project-starter/suggestions" element={<Suggestions />} />
        {/* project starter layout nested route ends */}

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
