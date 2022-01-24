import IDLoginForm from "@components/login/IDLoginForm";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtionStyle } from "@styles/button";
import theme from "@styles/theme";
import React from "react";

const Login: React.FC = () => {
  return (
    <div css={WrapperStype}>
      <div>로고</div>
      <button id="GITLOGIN">GitHub 계정으로 로그인</button>
      <span>or</span>
      <IDLoginForm />
      <SignupButton>회원가입</SignupButton>
    </div>
  );
};

export default Login;

const WrapperStype = css`
  ${theme.flexCenter}
  height: 400px;
  margin-top: 230px;
  justify-content: space-between;
  #GITLOGIN {
    ${ButtionStyle({ size: "large", color: "primary" })}
    background: #14142b;
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

const SignupButton = styled.button`
  ${ButtionStyle({ size: "small", type: "text" })}
`;
