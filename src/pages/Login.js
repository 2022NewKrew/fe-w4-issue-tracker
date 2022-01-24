import React from "react";

import { LoginContainer } from "@components/login/loginContainer";
import { ReactComponent as Logo } from "@components/icons/logo.svg";
import { LargeButton, SmallTextButton } from "@components/buttons/buttons";
import { SmallLink } from "@components/typography/link";
import { LargeTextInput } from "@components/textInputs/textInputs";

export default function Login() {
  return (
    <LoginContainer>
      <Logo />
      <LargeButton color='black'> GitHub 계정으로 로그인</LargeButton>
      <SmallLink>or</SmallLink>
      <LargeTextInput text='로그인'></LargeTextInput>
      <LargeTextInput text='비밀번호'></LargeTextInput>
      <LargeButton color='blue'>아이디로 로그인</LargeButton>
      <SmallTextButton>회원가입</SmallTextButton>
    </LoginContainer>
  );
}
