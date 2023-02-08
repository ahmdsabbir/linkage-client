import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthProvider from "./context/auth-context";
import UpdatePostProvider from "./context/update-post-context";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(
  <AuthProvider>
    <UpdatePostProvider>
      <App />
      <ToastContainer />
    </UpdatePostProvider>
  </AuthProvider>
);
