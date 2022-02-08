import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Wrapper } from "@atoms";
import { Header } from "@molecules";

const Layout = styled(Wrapper)`
  position: relative;
  width: 1280px;
  height: 100%;
  justify-content: flex-start;
`;

function Home() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default Home;
