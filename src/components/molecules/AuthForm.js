import React from "react";
import styled from "styled-components";
import { LargeLogo } from "@atoms/Logo";
import { LargeButton } from "@atoms/Button";
import { MediumText } from "@atoms/Text";
import { LargeTextInput } from "@atoms/TextInput";
import { COLOR } from "@constants/color";

const AuthFormWrapper = styled.div`
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

function AuthForm({ signInWithGithub }) {
  return (
    <AuthFormWrapper>
      <LargeLogo>Issue Tracker</LargeLogo>
      <LargeButton color={COLOR.BLACK} onClick={signInWithGithub}>
        GitHub 계정으로 로그인
      </LargeButton>
      <AuthFormText>or</AuthFormText>
      <AuthFormInput type={"text"} placeholder={"아이디"} />
      <AuthFormInput type={"password"} placeholder={"비밀번호"} />
      <LargeButton color={COLOR.BLUE} disabled={true}>
        아이디로 로그인
      </LargeButton>
      <AuthFormText>회원가입</AuthFormText>
    </AuthFormWrapper>
  );
}

export default AuthForm;
