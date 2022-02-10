import { CustomButton, TextInput } from "@UI/Molecules";

import { useInput } from "@hooks";
import { FormEvent, useEffect } from "react";
import styled from "@emotion/styled";
import { useUserMutation } from "@stores/user";

const IDLoginForm: React.FC = () => {
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  const { IDLogin, loginFailMessage, setLoginFailMessage } = useUserMutation();

  const login = (e: FormEvent) => {
    e.preventDefault();
    IDLogin({ id, pw });
  };

  useEffect(() => {
    if (loginFailMessage) {
      setTimeout(() => {
        setLoginFailMessage("");
      }, 10000);
    }
  }, [loginFailMessage]);

  return (
    <Wrapper onSubmit={login}>
      <TextInput size="large" label="아이디" value={id} onChange={onChangeId} />
      <TextInput
        size="large"
        label="비밀번호"
        type="password"
        value={pw}
        onChange={onChangePw}
        required
        pattern=".{4,}"
        errormsg="비밀번호는 4자리 이상입니다."
      />
      {loginFailMessage && <ErrorMsg>{loginFailMessage}</ErrorMsg>}
      <CustomButton.IDLoginButton disabled={!id || !pw} />
    </Wrapper>
  );
};

export default IDLoginForm;

const Wrapper = styled.form`
  & > .TextInput:nth-of-type(2) {
    margin: 16px 0 24px;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
`;
