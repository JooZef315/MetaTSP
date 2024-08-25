import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Layout from "./components/layout/layout";
import Home from "./pages/home";

import Grid from "./pages/grid";
import LiveMap from "./pages/liveMap";
import Dashboard from "./pages/dashboard";
import TSPLayout from "./components/layout/tspLayout";

export const router = createBrowserRouter([
  {
    path: "/MetaTSP/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/MetaTSP/",
        element: <Home />,
      },
      {
        path: "/MetaTSP/",
        element: <TSPLayout />,
        children: [
          {
            path: "/MetaTSP/grid",
            element: <Grid />,
          },
          {
            path: "/MetaTSP/map",
            element: <LiveMap />,
          },
        ],
      },
      {
        path: "/MetaTSP/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
