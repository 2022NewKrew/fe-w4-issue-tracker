import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Component: React.FC = props => {
  return (
    <ComponentWrap>
      <Outlet />
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > * {
    margin-top: 25px;
  }
`;
export default Component;
