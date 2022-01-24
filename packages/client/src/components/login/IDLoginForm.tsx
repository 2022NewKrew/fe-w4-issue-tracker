import TextInput from "@components/common/TextInput";
import useInput from "@hooks/useInput";
import { ButtionStyle } from "@styles/button";
import React, { FormEvent } from "react";

const IDLoginForm: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const IDLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log(id, password);
  };
  return (
    <form onSubmit={IDLogin}>
      <TextInput size="large" label="아이디" value={id} onChange={onChangeId} />
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
  );
};

export default IDLoginForm;
