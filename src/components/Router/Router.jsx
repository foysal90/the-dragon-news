import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../default/Main/Main";
import Home from "../Home/Home";
import Signin from "../default/SignIn/Signin";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
          path: '/signin',
          element: <Signin/>
        }
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
