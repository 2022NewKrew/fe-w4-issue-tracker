import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";
import { useInput } from "@hooks";

import React, { FormEvent } from "react";

const IDLoginForm: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const IDLogin = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={IDLogin}>
      <TextInput
        id="id"
        size="large"
        label="아이디"
        value={id}
        onChange={onChangeId}
      />
      <TextInput
        id="password"
        size="large"
        label="비밀번호"
        type="password"
        value={password}
        onChange={onChangePassword}
        required
        pattern=".{8,}"
        errormsg="비밀번호는 8자리 이상입니다."
      />
      <Button size="large" disabled={!id || !password} link="/issue">
        아이디로 로그인
      </Button>
    </form>
  );
};

export default IDLoginForm;
