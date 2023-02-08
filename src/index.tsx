import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/auth-provider";
import UpdatePostProvider from "./context/udpate-post-provider";
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
    </UpdatePostProvider>
  </AuthProvider>
);
