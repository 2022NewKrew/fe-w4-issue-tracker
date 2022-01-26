import React, { useEffect } from "react";
import styled from "styled-components";
import { authService } from "@/firebase";
import { FilterBar } from "@organisms/";
import { Header } from "@molecules/";
import { TabList } from "@molecules/";

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
      <FilterBar />
      <TabList />
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
