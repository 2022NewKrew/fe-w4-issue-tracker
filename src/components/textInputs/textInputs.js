import React from "react";
import styled, { css } from "styled-components";

const Field = styled.div`
  position: relative;
`;

const InputColors = styled.input`
  background-color: ${(props) => props.theme.greyscale.inputBackground};
  color: ${(props) => props.theme.greyscale.titleActive};
  &:active,
  &:focus {
    border: 1px solid ${(props) => props.theme.greyscale.titleActive};
    padding-top: 28px;
  }
  &:disabled {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
    color: ${(props) => props.theme.greyscale.placeholder};
    opacity: 0.5;
  }
  .active {
    background-color: ${(props) => props.theme.greyscale.offwhite};
    border: 1px solid ${(props) => props.theme.greyscale.titleActive};
    outline: none;
  }
`;

const SmallField = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  height: 40px;
  padding: 0 24px;
  border-radius: 11px;

  background-color: ${(props) => props.theme.greyscale.inputBackground};
`;

const Input = styled(InputColors)`
  box-sizing: border-box;
  padding: 0 24px;
  outline: none;
  font-size: 16px;
  border: none;
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

const MediumInput = styled(Input)`
  width: 320px;
  height: 56px;
  border-radius: 14px;
`;

const SmallInput = styled.input`
  width: 164px;
  margin-left: 8px;
`;

const LargeLabel = styled.label`
  position: absolute;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  left: 24px;
  bottom: 24px;
  transition: 0.3s ease all;
  ${LargeInput}:focus ~ & {
    top: 8px;
    font-size: 12px;
    color: #5264ae;
  }
  .success {
    color: ${(props) => props.theme.colors.darkGreen};
  }
  .error {
    color: ${(props) => props.theme.colors.darkRed};
  }
`;

const MediumLabel = styled.label`
  position: absolute;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  height: 20px;
  left: 24px;
  bottom: 14px;
  transition: 0.3s ease all;
  ${MediumInput}:focus ~ & {
    top: 8px;
    font-size: 12px;
    color: #5264ae;
  }
  .success {
    color: ${(props) => props.theme.colors.darkGreen};
  }
  .error {
    color: ${(props) => props.theme.colors.darkRed};
  }
`;

const SmallLabel = styled.label`
  width: 80px;
`;

export function LargeTextInput() {
  return (
    <Field>
      <LargeInput />
      <LargeLabel>로그인</LargeLabel>
    </Field>
  );
}

export function MediumTextInput() {
  return (
    <Field>
      <MediumInput />
      <MediumLabel>제목</MediumLabel>
    </Field>
  );
}

export function SmallTextInput() {
  return (
    <SmallField>
      <SmallLabel>제목</SmallLabel>
      <SmallInput />
    </SmallField>
  );
}
