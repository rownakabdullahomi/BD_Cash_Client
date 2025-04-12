import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import Requests from "../pages/Admin/Requests";
import UserDashboard from "../pages/home/UserDashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard/admin",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Requests />,
          },
    
        ],
      },
      {
        path: "/dashboard/user",
        element: <UserDashboard />,
        
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  
 
]);

export default Router;
