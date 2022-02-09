import { TextInput } from "@UI/Molecules";
import Atoms from "@UI/Atoms";

import { useInput } from "@hooks";
import { FormEvent } from "react";
import styled from "@emotion/styled";

const IDLoginForm: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const IDLogin = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Wrapper onSubmit={IDLogin}>
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
      <Atoms.Button
        size="large"
        disabled={!id || !password}
        link="/issue"
        text="아이디로 로그인"
      />
    </Wrapper>
  );
};

export default IDLoginForm;

const Wrapper = styled.form`
  & > .TextInput:nth-of-type(2) {
    margin: 16px 0 24px;
  }
`;
