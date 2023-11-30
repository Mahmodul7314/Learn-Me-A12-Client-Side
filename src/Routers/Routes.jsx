import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import TeachOn from "../Pages/TeachOn/TeachOn";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import TeacherRequest from "../Pages/Dashboard/TeacherRequest/TeacherRequest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import TeacherProfile from "../Pages/Dashboard/MyTeacherProfile/TeacherProfile";
import MyEnrollClass from "../Pages/Dashboard/MyEnrollClass/MyEnrollClass";
import StudentProfile from "../Pages/Dashboard/StudentProfile/StudentProfile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout>!</MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      { path:"/",
        element: <Home></Home>
      },
      {
        path: "/allclasses",
        element:<AllClasses></AllClasses>
      },
      {
        path:"/teachon",
        element:<TeachOn></TeachOn>
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
     
    
    ]
    },
    {//Dashboard routes-------------------------------------------------------------------
      path:"/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
         path:"teacherrequest",
         element:<AdminRoute><TeacherRequest></TeacherRequest></AdminRoute>
        },
        {
         path:"allusers",
         element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
         path:"classes",
         element:<AdminRoute><AllClasses></AllClasses></AdminRoute>
        },
        {
         path:"profile",
         element:<AdminRoute><Profile></Profile></AdminRoute>
        },
        //Teacher Dashboard
        {
          path:"addclass",
          element:<AddClass></AddClass>
        },
        {
          path:"myclass",
          element:<MyClass></MyClass>
        },
        {
          path:"teacherprofile",
          element:<TeacherProfile></TeacherProfile>
        },
        //General Users
        {
          path:"enrollclass",
          element:<MyEnrollClass></MyEnrollClass>
        },
        {
          path:"studentprofile",
          element:<StudentProfile></StudentProfile>
        }

      ]
    }
  ]);

  export default router;