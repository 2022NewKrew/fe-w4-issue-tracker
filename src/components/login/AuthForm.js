import React, { useState } from "react";
import { LargeButton } from "@components/buttons";
import styled, { css } from "styled-components";

export default function AuthForm() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [disable, setDisable] = useState(true);
  const [idActive, setIdActive] = useState(false);
  const [pwdActive, setPwdActive] = useState(false);

  const handleChangeId = (e) => {
    changeDisable(e.currentTarget.value, "id");
    changeActive(e.currentTarget.value, "id");

    setId(e.currentTarget.value);
  };

  const handleChangePwd = (e) => {
    changeDisable(e.currentTarget.value, "pwd");
    changeActive(e.currentTarget.value, "pwd");

    setPwd(e.currentTarget.value);
  };

  const changeDisable = (value, type) => {
    if (!value) {
      setDisable(true);
      return;
    }
    if (type === "id") pwd && setDisable(false);
    else if (type === "pwd") id && setDisable(false);
  };

  const changeActive = (value, type) => {
    if (type === "id") {
      value ? setIdActive(true) : setIdActive(false);
    } else if (type === "pwd") {
      value ? setPwdActive(true) : setPwdActive(false);
    }
  };

  return (
    <form>
      <Field>
        <LargeInput value={id} onChange={handleChangeId} active={idActive} />
        <LargeLabel active={idActive}>로그인</LargeLabel>
      </Field>
      <Field>
        <LargeInput value={pwd} onChange={handleChangePwd} active={pwdActive} />
        <LargeLabel active={pwdActive}>비밀번호</LargeLabel>
      </Field>
      <LargeButton color='blue' disable={disable}>
        아이디로 로그인
      </LargeButton>
    </form>
  );
}

const Field = styled.div`
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;

  outline: none;
  border: none;
  padding: 0 24px;

  font-size: 16px;

  background-color: ${(props) => props.theme.greyscale.inputBackground};
  color: ${(props) => props.theme.greyscale.titleActive};

  &:focus {
    background-color: ${(props) => props.theme.greyscale.offWhite};
    border: 1px solid ${(props) => props.theme.greyscale.titleActive};
    padding-top: 28px;
  }

  ${(props) => {
    if (props.active) {
      return css`
        padding-top: 28px;
      `;
    }
  }}
`;

const LargeInput = styled(Input)`
  width: 340px;
  height: 64px;
  border-radius: 16px;

  .success {
    background-color: ${(props) => props.theme.colors.lightGreen};
    border: 1px solid ${(props) => props.theme.colors.green};
  }
  .error {
    background-color: ${(props) => props.theme.colors.lightRed};
    border: 1px solid ${(props) => props.theme.colors.red};
  }
`;

const LargeLabel = styled.label`
  position: absolute;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  left: 24px;
  bottom: 24px;
  transition: 0.3s ease all;
  color: ${(props) => props.theme.greyscale.placeholder};

  ${LargeInput}:focus ~ & {
    top: 8px;
    font-size: 12px;
    color: #5264ae;
  }
  /* .success {
    color: ${(props) => props.theme.colors.darkGreen};
  }
  .error {
    color: ${(props) => props.theme.colors.darkRed};
  } */

  ${(props) => {
    if (props.active) {
      return css`
        top: 8px;
        font-size: 12px;
        color: #5264ae;
      `;
    }
  }}
`;
