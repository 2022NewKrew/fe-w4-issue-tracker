import React from "react";
import { LoginForm } from "@/components/organisms";

import { LogotypeLarge } from "@/components/atoms/Logo";
import styled from "styled-components";

const Login: React.FC = () => {
  return (
    <LoginWrap>
      <LogotypeLarge></LogotypeLarge>
      <LoginForm></LoginForm>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22vh;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.background};
  & svg:first-child {
    margin-bottom: 61px;
  }
`;
export default Login;
