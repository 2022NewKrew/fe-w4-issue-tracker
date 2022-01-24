import TextInput from "@components/common/TextInput";
import { css } from "@emotion/react";
import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import theme from "@styles/theme";
import React from "react";

const Login: React.FC = () => {
  const test = useInput("");
  return (
    <div css={WrapperStype}>
      <div>로고</div>
      <button css={ButtionStyle("primary").large}>
        GitHub 계정으로 로그인
      </button>
      <span>or</span>
      <TextInput size="large" label="아이디" {...test} />
      <TextInput size="large" label="비밀번호" {...test} />
      <button css={ButtionStyle("primary").large}>아이디로 로그인</button>
    </div>
  );
};

export default Login;

const WrapperStype = css`
  ${theme.flexCenter}
  span {
    ${theme.text.small}
    color: ${theme.greyscale.placeholer}
  }
`;
