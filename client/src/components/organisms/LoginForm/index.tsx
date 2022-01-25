import React from "react";
import styled, { css } from "styled-components";
import { Button, Input, Text } from "@/components/atoms";

const LoginForm: React.FC = () => {
  return (
    <LoginFormWrap>
      <Button name="GitHub 계정으로 로그인" color="black" type="large" />
      <span style={{ margin: "24px 0px 24px 0px" }}>or</span>
      <Input type="large" name="아이디" margin="0px 0px 20px 0px" />
      <Input type="large" name="비밀번호" margin="0px 0px 20px 0px" />
      <Button type="large" name="아이디로 로그인" margin="20px 0px 10px 0px" />
      <Text type="xsmall" cssValue={SignUpBtn}>
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
