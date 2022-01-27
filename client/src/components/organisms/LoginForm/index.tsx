import React from "react";
import styled, { css } from "styled-components";
import { Button, TextInput, Text } from "@/components/atoms";
import { GITHUB_LOGINURL } from "@/constants/type";

const LoginForm: React.FC = () => {
  const gitHubClickHandler = () => {
    window.location.href = GITHUB_LOGINURL;
  };
  const submitHandler = ({ target }: { target: HTMLButtonElement }) => {
    window.location.href = "http://localhost:3000/component";
  };

  const Props = {
    GitHubLoginBtnProps: {
      styles: { backgroundColor: "black", color: "white" },
      onClick: gitHubClickHandler,
    },
    InputIdProps: {
      name: "아이디",
      styles: { margin: "0px 0px 20px 0px" },
    },
    InputPasswdProps: {
      name: "비밀번호",
      styles: { margin: "0px 0px 20px 0px" },
    },
    LoginBtnProps: {
      onClick: submitHandler,
      styles: { margin: "0px 0px 10px 0px" },
    },
    SingUpBtnProps: {
      styles: { childCSS: SignUpBtn },
    },
  };

  return (
    <LoginFormWrap>
      <Button type="large" {...Props.GitHubLoginBtnProps}>
        GitHub으로 로그인
      </Button>
      <span style={{ margin: "24px 0px 24px 0px" }}>or</span>
      <TextInput type="large" {...Props.InputIdProps} />
      <TextInput type="large" {...Props.InputPasswdProps} />
      <Button type="large" {...Props.LoginBtnProps}>
        아이디로 로그인
      </Button>
      <Text type="xsmall" {...Props.SingUpBtnProps}>
        회원가입
      </Text>
    </LoginFormWrap>
  );
};

const LoginFormWrap = styled.div`
  display: flex;
  width: 342px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SignUpBtn = css`
  text-align: center;
  cursor: pointer;
`;
export default LoginForm;
