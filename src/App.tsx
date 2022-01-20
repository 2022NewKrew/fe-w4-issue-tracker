import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Callback from "./components/Login/Callback";

const App = () => (
  <Wrapper>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7fc;
`;

export default App;
