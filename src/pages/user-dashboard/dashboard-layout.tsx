/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../../context/auth-context";

const DashboardLayout = () => {
  const { auth, handleLogout } = useAuthState();

  return auth.token ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default DashboardLayout;
