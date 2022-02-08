import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants";
import { AppRouter } from "@routes";

const Main = styled.div`
  position: absolute;
  background: ${COLOR.GREYSCALE.BACKGROUND};
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Main>
      <AppRouter />
    </Main>
  );
}
export default App;
