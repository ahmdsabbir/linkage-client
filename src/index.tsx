import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthProvider from "./context/auth-context";
import UpdatePostProvider from "./context/update-post-context";
import "./index.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FullPageErrorFallback } from "./lib/error-fallback-message";
const queryClient = new QueryClient();

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <UpdatePostProvider>
        <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
          <App />
        </ErrorBoundary>
        <ToastContainer />
      </UpdatePostProvider>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
);
