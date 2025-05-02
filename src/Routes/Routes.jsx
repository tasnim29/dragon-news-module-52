import { createBrowserRouter } from "react-router";

import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    hydrateFallbackElement: <p>Loading..</p>,
    loader: () => fetch("/news.json"),
    Component: NewsDetails,
  },
  {
    path: "/*",
    element: <h1>error 404</h1>,
  },
]);
