import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Requests from "../pages/Admin/Requests";
import UserDashboard from "../pages/home/UserDashboard";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import History from "../pages/History";
import Error404 from "../pages/Error404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        ),
        children: [
          {
            index: true,
            element: <Requests />,
          },
          {
            path: "requests",
            element: <Requests />,
          },
        ],
      },
      {
        path: "/dashboard/user",
        element: (
          <UserRoute>
            <UserDashboard />
          </UserRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <UserRoute>
            <History />
          </UserRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

export default Router;
