import React, { useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import { Button, TextInput, Text } from "@/components/atoms";
import { GITHUB_LOGINURL } from "@/constants/type";
import { useAuthStore } from "@/stores/auth";
import { useMutation } from "react-query";
import { userLoginFetcher } from "@/utils/fetcher";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const { signin } = useAuthStore();
  const nav = useNavigate();
  const loginMutation = useMutation(userLoginFetcher, {
    onSuccess: data => {
      signin(data);
      nav("issue");
    },
  });
  const gitHubClickHandler = useCallback(() => {
    window.location.href = GITHUB_LOGINURL;
  }, []);
  const submitHandler = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: string };
      pw: { value: string };
    };
    loginMutation.mutate({ id: target.id.value, pw: target.pw.value });
  }, []);

  const Props = useMemo(
    () => ({
      GitHubLoginBtnProps: {
        styles: { backgroundColor: "black", color: "white" },
        onClick: gitHubClickHandler,
      },
      InputIdProps: {
        name: "아이디",
        id: "id",
        label: "아이디",
        styles: { margin: "0px 0px 20px 0px" },
      },
      InputPasswdProps: {
        name: "비밀번호",
        id: "pw",
        label: "비밀번호",
        styles: { margin: "0px 0px 20px 0px" },
      },
      LoginBtnProps: {
        type: "submit",
        styles: { margin: "0px 0px 10px 0px" },
      },
      SingUpBtnProps: {
        styles: { childCSS: SignUpBtn },
      },
    }),
    [],
  );

  return (
    <LoginFormWrap>
      <Button type="large" {...Props.GitHubLoginBtnProps}>
        GitHub으로 로그인
      </Button>
      <span style={{ margin: "24px 0px 24px 0px" }}>or</span>
      <form onSubmit={submitHandler}>
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
