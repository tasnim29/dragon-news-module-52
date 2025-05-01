import { createBrowserRouter } from "react-router";

import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/categories/:id",
        hydrateFallbackElement: <p>Loading..</p>,
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>error 404</h1>,
  },
]);
