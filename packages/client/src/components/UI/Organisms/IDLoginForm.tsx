import Atoms from "@UI/Atoms";
import { useInput } from "@hooks";

import { FormEvent } from "react";
import { TextInput } from "@UI/Molecules";

const IDLoginForm: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const IDLogin = (e: FormEvent) => {
    e.preventDefault();
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
        required
        pattern=".{8,}"
        errormsg="비밀번호는 8자리 이상입니다."
      />
      <Atoms.Button size="large" disabled={!id || !password} link="/issue">
        아이디로 로그인
      </Atoms.Button>
    </form>
  );
};

export default IDLoginForm;
