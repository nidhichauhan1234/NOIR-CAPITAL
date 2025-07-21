import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Index from "./routes/index";
import DashboardRoute from "./routes/dashboard";
import AppliedJobsRoute from "./routes/applied-jobs";
import LoginRoute from "./routes/login"; // ✅ import login
import LogoutRoute from "./routes/logout"; // ✅ import
import StatusRoute from "./routes/status";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "dashboard", element: <DashboardRoute /> },
      { path: "applied-jobs", element: <AppliedJobsRoute /> },
      { path: "status", element: <StatusRoute /> }, // ✅ added route
    ],
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/logout",
    element: <LogoutRoute />, // ✅ added logout route
  },
]);



export default router;
