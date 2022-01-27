import React, { useEffect } from "react";
import styled from "styled-components";
import { authService } from "@/firebase";
import { Header } from "@molecules";
import { IssueListHeader, IssueTable } from "@organisms";
import { Wrapper } from "@atoms";

const _Wrapper = styled(Wrapper)`
  position: relative;
  width: 1400px;
  height: 100%;
  justify-content: flex-start;
`;

function Home() {
  const auth = authService.getAuth();
  return (
    <_Wrapper>
      <Header />
      <IssueListHeader />
      <IssueTable />
      <button
        onClick={() => {
          authService.signOut(auth);
        }}
      >
        sign out
      </button>
    </_Wrapper>
  );
}

export default Home;
