import React, { useEffect } from "react";
import styled from "styled-components";
import { authService } from "@/firebase";
import { Header, FilterBar, TabList } from "@molecules";
import { IssueListHeader } from "@organisms";

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function Home() {
  const auth = authService.getAuth();
  return (
    <HomeWrapper>
      <Header />
      <IssueListHeader />
      <button
        onClick={() => {
          authService.signOut(auth);
        }}
      >
        sign out
      </button>
    </HomeWrapper>
  );
}

export default Home;
