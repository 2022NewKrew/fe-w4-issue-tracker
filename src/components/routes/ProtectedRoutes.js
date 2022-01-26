import React from "react";
import styled from "styled-components";
import { Navigate, useLocation } from "react-router-dom";
import { Home } from "@pages/";

function ProtectedRoutes({ isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return <Home />;
}

export default ProtectedRoutes;
