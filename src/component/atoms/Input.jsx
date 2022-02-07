import { useRef } from "react";
import styled, { css } from "styled-components";
import { cssFontSize } from "./Text";

export const Input = ({ size, placeholder, disabled, ref, ...props }) => {
  const inputRef = ref ?? useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <InputWrapper size={size} onClick={handleClick} disabled={disabled}>
      <StyledInput size={size} pattern=".+" required ref={inputRef} disabled={disabled} {...props} />
      <StyledLabel size={size}>{placeholder}</StyledLabel>
    </InputWrapper>
  );
};

const InputWrapper = styled.div(
  ({ theme, size }) => css`
    ${cssWrapperSize[size]};

    position: relative;
    cursor: text;
    width: 100%;
    background-color: ${theme.grayscale.background};

    &:focus-within {
      background-color: ${theme.grayscale.offWhite};
      outline: 1px solid ${theme.grayscale.titleActive};
    }

    &[disabled] {
      opacity: 0.5;
      cursor: inherit;
    }
  `
);

// StyledLabel 과 StyledInput 정의 순서가 바뀌면 제대로 동작 안함..

const StyledLabel = styled.label`
  position: absolute;
  transition: 0.2s ease-in-out;
  left: 24px;
  top: ${({ size }) => cssLabelTop[size].default};
  color: ${({ theme }) => theme.grayscale.placeholder};
  ${cssFontSize["small"]}
`;

const StyledInput = styled.input`
  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.titleActive};
  width: 100%;

  &:focus,
  &:valid {
    & + ${StyledLabel} {
      color: ${({ theme }) => theme.grayscale.label};
      top: ${({ size }) => cssLabelTop[size].inputActive};
      ${cssFontSize["xsmall"]};
    }
  }
`;

const cssWrapperSize = {
  large: css`
    height: 64px;
    padding: 28px 24px 8px 24px;
    border-radius: 16px;
  `,
  medium: css`
    height: 56px;
    padding: 24px 24px 4px 24px;
    border-radius: 14px;
  `,
  small: css`
    height: 40px;
    padding: 6px 24px 6px 112px;
    border-radius: 11px;
  `,
};

const cssLabelTop = {
  large: { default: "18px", inputActive: "8px" },
  medium: { default: "14px", inputActive: "4px" },
  small: { default: "4px", inputActive: "9px" },
};
