import React, { useEffect } from "react";
import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Component: React.FC = props => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/component") {
      navigate("/component/atoms");
    }
  }, []);
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
