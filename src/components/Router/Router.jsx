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

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Category/>,
          loader: () =>
            fetch('http://localhost:5000/news') 
        },
        {
          path: "/home",
          element: <Home />
          
        },
        {
          path: "/category/:id",
          element: <Category />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/categories/${params.id}`),
        },
       
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/register",
          element: <Register/>
        },
      ],
    },
    {
      path: "/news",
     element: <NewsLayout />,
    //  loader: ({ params }) =>
    //         fetch(`http://localhost:5000/news/${params.id}`),
      children: [
        {
          path: ":id",
          element: <PrivateRoute><News /></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
