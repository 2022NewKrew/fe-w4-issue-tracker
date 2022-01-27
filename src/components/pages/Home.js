import React, { useEffect } from "react";
import styled from "styled-components";
import { authService } from "@/firebase";
import { Header } from "@molecules";
import { IssueListPageHeader, IssueTable } from "@organisms";
import { Wrapper } from "@atoms";

const _Wrapper = styled(Wrapper)`
  position: relative;
  width: 1280px;
  height: 100%;
  justify-content: flex-start;
`;

function Home() {
  return (
    <_Wrapper>
      <Header />
      <IssueListPageHeader />
      <IssueTable />
    </_Wrapper>
  );
}

export default Home;
