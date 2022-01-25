import React, { useState } from "react";
import styled, { css } from "styled-components";

const Field = styled.div`
  position: relative;
`;

const SmallField = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;

  width: 300px;
  height: 40px;
  padding: 0 24px;
  border-radius: 11px;

  background-color: ${(props) => props.theme.greyscale.inputBackground};

  &:focus-within {
    border: 1px solid ${(props) => props.theme.greyscale.titleActive};
    background-color: ${(props) => props.theme.greyscale.offwhite};
  }

  &:disabled {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
    color: ${(props) => props.theme.greyscale.placeholder};
    opacity: 0.5;
  }

  .filled {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
    color: ${(props) => props.theme.greyscale.label};
    font-size: 12px;
  }
`;

const Input = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))`
  box-sizing: border-box;

  padding: 0 24px;
  outline: none;
  border: none;

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

const MediumInput = styled(Input)`
  width: 320px;
  height: 56px;
  border-radius: 14px;
`;

const SmallInput = styled.input`
  width: 164px;
  margin-left: 8px;
  background-color: inherit;

  border: none;
  outline: none;
`;

const LargeLabel = styled.label`
  position: absolute;
  left: 24px;
  bottom: 24px;

  font-size: 16px;
  font-weight: normal;

  pointer-events: none;
  transition: 0.3s ease all;

  color: ${(props) => props.theme.greyscale.placeholder};

  ${LargeInput}:focus ~ & {
    top: 8px;
    font-size: 12px;
    color: #5264ae;
  }

  ${(props) => {
    if (props.active) {
      return css`
        top: 8px;
        font-size: 12px;
        color: #5264ae;
      `;
    }
  }}

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
  color: ${(props) => props.theme.greyscale.placeholder};
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
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.greyscale.placeholder};

  ${SmallInput}:focus ~ & {
    color: 1px solid ${(props) => props.theme.greyscale.label};
    font-size: 12px;
  }
`;

export function LargeTextInput({
  type,
  value,
  handleValueChange,
  setDisable,
  text,
}) {
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    changeDisable(e.currentTarget.value);
    changeActive(e.currentTarget.value);
    handleValueChange(e.currentTarget.value);
  };

  const changeActive = (value) => {
    value ? setActive(true) : setActive(false);
  };

  const changeDisable = (value) => {
    if (!value) setDisable(true);
  };

  return (
    <Field>
      <LargeInput
        type={type}
        onChange={handleChange}
        value={value}
        active={active}
      />
      <LargeLabel active={active}>{text}</LargeLabel>
    </Field>
  );
}

export function MediumTextInput(props) {
  return (
    <Field>
      <MediumInput />
      <MediumLabel>{props.text}</MediumLabel>
    </Field>
  );
}

export function SmallTextInput(props) {
  return (
    <SmallField>
      <SmallLabel>{props.text}</SmallLabel>
      <SmallInput />
    </SmallField>
  );
}
