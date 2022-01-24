import TextInput from "@components/common/TextInput";
import { css } from "@emotion/react";
import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import theme from "@styles/theme";
import React, { FormEvent } from "react";

const Login: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const IDLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log(id, password);
  };

  return (
    <div css={WrapperStype}>
      <div>로고</div>
      <button id="GITLOGIN">GitHub 계정으로 로그인</button>
      <span>or</span>
      <form onSubmit={IDLogin}>
        <TextInput
          size="large"
          label="아이디"
          value={id}
          onChange={onChangeId}
        />
        <TextInput
          size="large"
          label="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        <button
          css={ButtionStyle({ size: "large", color: "primary" })}
          disabled={!id || !password}
        >
          아이디로 로그인
        </button>
      </form>
      <button css={ButtionStyle({ size: "small", type: "text" })}>
        회원가입
      </button>
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
