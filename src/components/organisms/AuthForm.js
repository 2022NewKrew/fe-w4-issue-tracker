import React from "react";
import styled from "styled-components";
import { LargeLogo, LargeButton, MediumText, LargeTextInput } from "@atoms";
import { COLOR } from "@constants";
import { OAuthForm } from "@molecules";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthFormText = styled(MediumText)`
  margin: 20px;
`;

const AuthFormInput = styled(LargeTextInput)`
  margin-bottom: 20px;
`;

function AuthForm() {
  return (
    <Wrapper>
      <LargeLogo>Issue Tracker</LargeLogo>
      <OAuthForm />
      <AuthFormText>or</AuthFormText>
      <AuthFormInput type={"text"} placeholder={"아이디"} />
      <AuthFormInput type={"password"} placeholder={"비밀번호"} />
      <LargeButton color={COLOR.BLUE} disabled={true}>
        아이디로 로그인
      </LargeButton>
      <AuthFormText>회원가입</AuthFormText>
    </Wrapper>
  );
}

export default AuthForm;
