import React from "react";
import styled from "styled-components";
import Auth from "../routes/Auth";

const Main = styled.div`
  position: absolute;
  background: #e5e5e5;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

function App() {
  return (
    <Main>
      <Auth />
    </Main>
  );
}

export default App;
