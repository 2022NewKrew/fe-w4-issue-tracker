import React from "react";
import { LogotypeLarge } from "@/components/atoms/Icons";
import styled from "styled-components";
import { LoginForm } from "@/components/organisms";

const Login: React.FC = props => {
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
  /* justify-content: center; */
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.background};
  & svg:first-child {
    margin-bottom: 61px;
  }
`;
export default Login;
