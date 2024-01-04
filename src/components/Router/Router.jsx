import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../default/Main/Main";

import Signin from "../default/SignIn/Signin";
import Category from "../Pages/Category/Category";
import NewsLayout from "../../layouts/NewsLayout";
import News from "../Shared/News/News";
import Home from "../default/Home/Home";
import Register from "../default/Register/Register";
import PrivateRoute from "../Shared/ProtectedRoute/PrivateRoute";
import FakeApi from "../FakeApi/FakeApi";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Category />,
          loader: () =>
            fetch("https://the-news-dragon-server-five-iota.vercel.app/news"),
           
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/category/:id",
          element: <Category />,
          loader: ({ params }) =>
            fetch(
              `https://the-news-dragon-server-five-iota.vercel.app/categories/${params.id}`
            ),
        },

        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/fakeApi",
          element: <FakeApi />,
          loader: () =>
            fetch(
              "https://newsapi.org/v2/everything?q=apple&from=2024-01-03&to=2024-01-03&sortBy=popularity&apiKey=838b5fb02deb4b808ab44571db09b43f"
            ),
        },
      ],
    },
    {
      path: "/news",
      element: <NewsLayout />,

      children: [
        {
          path: ":id",
          element: (
            <PrivateRoute>
              <News />
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://the-news-dragon-server-five-iota.vercel.app/news/${params.id}`
            ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
