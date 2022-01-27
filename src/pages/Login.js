import React, { useState, useEffect } from "react";

import { LoginContainer } from "@components/templates/loginContainer";
import { ReactComponent as Logo } from "@assets/icons/logo.svg";
import { Button, SmallTextButton } from "@components/atoms/buttons";
import { TextInput } from "@components/atoms/textInputs";
import { SmallLink } from "@components/atoms/link";

import { firebaseAuth, githubProvider } from "../firebase";

import { useRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Login() {
  const provider = githubProvider;
  const navigate = useNavigate();

  const [user, setUser] = useRecoilState(userState);
  const [disable, setDisable] = useState(true);
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleGithubLogin() {
    firebaseAuth.signInWithPopup(provider).then((result) => {
      const signedInUser = {
        name: result.user.displayName,
        email: result.user.email,
      };
      const accessToken = result.credential.accessToken;
      setUser(signedInUser);
      setCookie("user", accessToken);
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
      <Button size='large' color='black' onClick={handleGithubLogin}>
        GitHub 계정으로 로그인
      </Button>
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
      <Button size='large' onClick={handleLogin} color='blue' disable={disable}>
        아이디로 로그인
      </Button>
      <SmallTextButton>회원가입</SmallTextButton>
    </LoginContainer>
  );
}
