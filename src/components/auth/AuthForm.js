import React from "react";
import styled from "styled-components";
import { LargeLogo } from "@commonComponents/Logo";
import { LargeButton } from "@commonComponents/Button";
import { MediumText } from "@commonComponents/Text";
import { LargeTextInput } from "@commonComponents/TextInput";
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

const AuthText = styled(MediumText)`
  margin: 20px;
`;

const AuthInput = styled(LargeTextInput)`
  margin-bottom: 20px;
`;

function AuthForm() {
  return (
    <AuthFormWrapper>
      <LargeLogo>Issue Tracker</LargeLogo>
      <LargeButton color={COLOR.BLACK}>GitHub 계정으로 로그인</LargeButton>
      <AuthText>or</AuthText>
      <AuthInput type={"text"} placeholder={"아이디"} />
      <AuthInput type={"password"} placeholder={"비밀번호"} />
      <LargeButton color={COLOR.BLUE} disabled={true}>
        아이디로 로그인
      </LargeButton>
      <AuthText>회원가입</AuthText>
    </AuthFormWrapper>
  );
}

export default AuthForm;
