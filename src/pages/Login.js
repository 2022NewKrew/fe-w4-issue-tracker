import React, { useEffect } from "react";

import { LoginContainer } from "@components/login/loginContainer";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { LargeButton, SmallTextButton } from "@components/buttons";
import { SmallLink } from "@components/link";
import AuthForm from "@components/login/AuthForm";

import { firebaseAuth, githubProvider } from "../firebase";

import { useRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export default function Login() {
  const provider = githubProvider;
  let navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const cookies = new Cookies();

  function handleGithubLogin() {
    firebaseAuth.signInWithPopup(provider).then((result) => {
      const signedInUser = {
        name: result.user.displayName,
        email: result.user.email,
      };
      const accessToken = result.credential.accessToken;
      setUser(signedInUser);
      cookies.set("user", accessToken);
    });
  }

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <LoginContainer>
      <Logo />
      <LargeButton color='black' onClick={handleGithubLogin}>
        GitHub 계정으로 로그인
      </LargeButton>
      <SmallLink>or</SmallLink>
      <AuthForm />
      <SmallTextButton>회원가입</SmallTextButton>
    </LoginContainer>
  );
}

// {
//   /* <LargeTextInput text='로그인'></LargeTextInput>
// <LargeTextInput text='비밀번호'></LargeTextInput>
// <LargeButton color='blue'>아이디로 로그인</LargeButton> */
// }
