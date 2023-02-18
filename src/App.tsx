/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CreateProject from "./components/create-project";
import EditProject from "./components/edit-project";
import ErrorPage from "./components/error-page";
import Spinner from "./components/spinner";
import Login from "./features/authorization-authentication/Login";
import Register from "./features/authorization-authentication/register";
import { ErrorMessage } from "./lib/error-fallback-message";
import History from "./pages/dummy/History";
import Reporters from "./pages/dummy/reporters";
import Settings from "./pages/dummy/settings";
import Users from "./pages/dummy/users";
import Home from "./pages/home";
import AllProjects from "./pages/user-dashboard/all-projects";
import Basic from "./pages/user-dashboard/basic-page";
import DashboardDetails from "./pages/user-dashboard/dashboard-details";

import RootLayout from "./root-layout";

const DashboardLayout = lazy(
  () => import("./pages/user-dashboard/dashboard-layout")
);

// error fallback component
function ErrorFallback({ error }) {
  return <ErrorMessage error={error} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      {/* user dashboard */}
      <Suspense fallback={<Spinner />}>
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
      </Suspense>

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
};

export default App;
