import React, { useState, useEffect } from "react";

import { LoginContainer } from "@components/loginContainer";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { LargeButton, SmallTextButton } from "@components/buttons";
import { TextInput } from "@components/textInputs";
import { SmallLink } from "@components/link";

import { firebaseAuth, githubProvider } from "../firebase";

import { useRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

export default function Login() {
  const provider = githubProvider;
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const [disable, setDisable] = useState(true);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
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

  const changeDisable = () => {
    if (id.length > 0 && pwd.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleLogin = () => {
    console.log(id, pwd);
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  useEffect(() => {
    changeDisable();
  }, [id, pwd]);

  return (
    <LoginContainer>
      <Logo />
      <LargeButton color='black' onClick={handleGithubLogin}>
        GitHub 계정으로 로그인
      </LargeButton>
      <SmallLink>or</SmallLink>
      <TextInput
        value={id}
        handleValueChange={setId}
        setDisable={setDisable}
        text='로그인'
      />
      <TextInput
        type='password'
        value={pwd}
        handleValueChange={setPwd}
        setDisable={setDisable}
        text='비밀번호'
      />
      <LargeButton onClick={handleLogin} color='blue' disable={disable}>
        아이디로 로그인
      </LargeButton>
      <SmallTextButton>회원가입</SmallTextButton>
    </LoginContainer>
  );
}
