import React from "react";

import { LoginContainer } from "@components/login/loginContainer";
import { ReactComponent as Logo } from "@components/icons/logo.svg";
import { LargeButton, SmallTextButton } from "@components/buttons/buttons";
import { SmallLink } from "@components/typography/link";
import { LargeTextInput } from "@components/textInputs/textInputs";
import AuthForm from "@components/login/AuthForm";

import { firebaseAuth, githubProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const provider = githubProvider;
  function handleGithubLogin() {
    firebaseAuth.signInWithPopup(provider).then((result) => {
      // The signed-in user info.
      const user = result.user;
    });
  }

  return (
    <LoginContainer>
      <Logo />
      <LargeButton color='black' onClick={handleGithubLogin}>
        GitHub 계정으로 로그인
      </LargeButton>
      <SmallLink>or</SmallLink>
      <AuthForm />
      {/* <LargeTextInput text='로그인'></LargeTextInput>
      <LargeTextInput text='비밀번호'></LargeTextInput>
      <LargeButton color='blue'>아이디로 로그인</LargeButton> */}
      <SmallTextButton>회원가입</SmallTextButton>
    </LoginContainer>
  );
}
