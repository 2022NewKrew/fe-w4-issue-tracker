import React from "react";
import Login from "./components/Login";
import styled from "styled-components";

const App = () => (
  <Wrapper>
    <Login />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7fc;
`;

export default App;
