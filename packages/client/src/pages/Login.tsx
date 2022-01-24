import TextInput from "@components/common/TextInput";
import { css } from "@emotion/react";
import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import theme from "@styles/theme";
import React from "react";

const Login: React.FC = () => {
  const [value, onChange] = useInput("");
  return (
    <div css={WrapperStype}>
      <button css={ButtionStyle({ size: "medium" })}>
        GitHub 계정으로 로그인
      </button>
      <TextInput size="large" label="gd" value={value} onChange={onChange} />
      <TextInput size="medium" label="gd" value={value} onChange={onChange} />
      <TextInput size="small" label="gd" value={value} onChange={onChange} />
      {/* <div>로고</div>
      <button css={ButtionStyle({ size: "large", color: "primary" })}>
        GitHub 계정으로 로그인
      </button>
      <span>or</span>
      <TextInput size="large" label="아이디" {...test} />
      <TextInput size="large" label="비밀번호" {...test} />
      <button css={ButtionStyle({ size: "large", color: "primary" })}>
        아이디로 로그인
      </button> */}
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
