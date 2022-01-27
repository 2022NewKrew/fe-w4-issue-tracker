import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";
import { useInput } from "@hooks";

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
      />
      <Button size="large" disabled={!id || !password}>
        아이디로 로그인
      </Button>
    </form>
  );
};

export default IDLoginForm;
