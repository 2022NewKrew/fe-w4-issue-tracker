import Button from "@components/common/Button";
import IDLoginForm from "@components/login/IDLoginForm";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import React from "react";
import Icon from "@icon";

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Icon name="logo_large" />
      <Button size="large">GitHub 계정으로 로그인</Button>
      <span>or</span>
      <IDLoginForm />
      <Button size="small" type="text">
        회원가입
      </Button>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  ${theme.flexCenter}
  margin-top: 230px;
  justify-content: space-between;
  svg {
    position: static;
  }
  & > button:first-of-type {
    background: #14142b;
    margin: 60px 0 24px;
    :hover:enabled:not(:active),
    :active {
      background: #14142b;
      border: none;
    }
  }
  form {
    ${theme.flexCenter}
    height: 230px;
    justify-content: space-between;
  }
  span {
    ${theme.text.small};
    color: ${theme.greyscale.placeholer};
    font-weight: bold;
  }
`;
