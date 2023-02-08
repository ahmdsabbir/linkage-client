import { Outlet } from "react-router-dom";
import { useAuthState } from "../../context/auth-context";

const DashboardLayout = () => {
  const { auth } = useAuthState();

  if (Object.keys(auth).length === 0 && auth.constructor === Object) {
    return;
  } else {
    console.log(auth);
  }
  return <Outlet />;
};

export default DashboardLayout;
