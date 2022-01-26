import React from "react";
import { AuthForm } from "@organisms/";
import { useLocation, Navigate } from "react-router-dom";

function Auth({ isLoggedIn }) {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (isLoggedIn) {
    return <Navigate to={from} replace={true} />;
  }

  return <AuthForm />;
}

export default Auth;
