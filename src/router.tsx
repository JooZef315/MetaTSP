import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Layout from "./components/layout";
import Home from "./pages/home";
import TSPLayout from "./components/tspLayout";
import Grid from "./pages/grid";
import LiveMap from "./pages/liveMap";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <TSPLayout />,
        children: [
          {
            path: "/grid",
            element: <Grid />,
          },
          {
            path: "/map",
            element: <LiveMap />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
