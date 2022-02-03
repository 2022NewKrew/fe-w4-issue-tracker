import React from "react";
import styled from "styled-components";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { Header } from "@molecules";
import { Wrapper } from "@atoms";

const Layout = styled(Wrapper)`
  position: relative;
  width: 1280px;
  height: 100%;
  justify-content: flex-start;
`;

function ProtectedRoutes({ isLoggedIn }) {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoutes;
