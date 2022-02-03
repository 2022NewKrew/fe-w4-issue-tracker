import React from "react";
import {
  LargeButton,
  LargeLogo,
  LargeTextInput,
  MediumText,
  Wrapper,
} from "@atoms";
import { OAuthForm } from "@molecules";
import { COLOR } from "@constants";
import styled from "styled-components";

const AuthWrapper = styled(Wrapper)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const AuthFormText = styled(MediumText)`
  margin: 20px;
`;

const AuthFormInput = styled(LargeTextInput)`
  margin-bottom: 20px;
`;

function Auth() {
  return (
    <AuthWrapper>
      <LargeLogo>Issue Tracker</LargeLogo>
      <OAuthForm />
      <AuthFormText>or</AuthFormText>
      <AuthFormInput type={"text"} placeholder={"아이디"} />
      <AuthFormInput type={"password"} placeholder={"비밀번호"} />
      <LargeButton color={COLOR.BLUE} disabled={true}>
        아이디로 로그인
      </LargeButton>
      <AuthFormText>회원가입</AuthFormText>
    </AuthWrapper>
  );
}

export default Auth;
