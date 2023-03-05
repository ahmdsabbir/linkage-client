/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./components/error-page";
import Spinner from "./components/spinner";
import Login from "./features/authorization-authentication/Login";
import Register from "./features/authorization-authentication/register";
import { ErrorMessage } from "./lib/error-fallback-message";
import Home from "./pages/home";
import SiloProjectLayout from "./pages/user-dashboard/silo-project";

import RootLayout from "./root-layout";

const DashboardDetails = lazy(
  () => import("./pages/user-dashboard/dashboard-details")
);
const DashboardLayout = lazy(
  () => import("./pages/user-dashboard/dashboard-layout")
);
const CreateProject = lazy(() => import("./components/create-project"));
const EditProject = lazy(() => import("./components/edit-project"));
const AllProjects = lazy(() => import("./pages/user-dashboard/all-projects"));
const History = lazy(() => import("./pages/dummy/History"));
const Reporters = lazy(() => import("./pages/dummy/reporters"));
const Settings = lazy(() => import("./pages/dummy/settings"));
const Users = lazy(() => import("./pages/dummy/users"));
const Basic = lazy(() => import("./pages/user-dashboard/basic-page"));

// error fallback component
function ErrorFallback({ error }) {
  return <ErrorMessage error={error} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      {/* user dashboard */}

      <Route
        path="dashboard"
        element={
          <Suspense fallback={<Spinner />}>
            <DashboardLayout />
          </Suspense>
        }
      >
        <Route index element={<DashboardDetails />} />
        <Route
          path="create-project"
          element={
            <Suspense fallback={<Spinner />}>
              <CreateProject />
            </Suspense>
          }
        />
        <Route
          path="edit-project"
          element={
            <Suspense fallback={<Spinner />}>
              <EditProject />
            </Suspense>
          }
        />
        <Route
          path="all-projects"
          element={
            <Suspense fallback={<Spinner />}>
              <AllProjects />
            </Suspense>
          }
        />
        {/* basic post router */}
        <Route
          path="basic"
          element={
            <Suspense fallback={<Spinner />}>
              <Basic />
            </Suspense>
          }
        />
        {/* silo project */}
        <Route
          path="silo"
          element={
            <Suspense fallback={<Spinner />}>
              <SiloProjectLayout />
            </Suspense>
          }
        />

        <Route
          path="history"
          element={
            <Suspense fallback={<Spinner />}>
              <History />
            </Suspense>
          }
        />
        <Route
          path="reporters"
          element={
            <Suspense fallback={<Spinner />}>
              <Reporters />
            </Suspense>
          }
        />
        <Route
          path="users"
          element={
            <Suspense fallback={<Spinner />}>
              <Users />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={<Spinner />}>
              <Settings />
            </Suspense>
          }
        />
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
};

export default App;
