import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { RegistartionPage } from "./pages/RegistrationPage/RegistrationPage";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },
    {
      path:'/main',
      element:<MainPage/>
    },
    {
      path:'/forgot',
      element:<ForgotPasswordPage />
    },
    {
      path:'/registration',
      element:<RegistartionPage />
    },
  ])
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
