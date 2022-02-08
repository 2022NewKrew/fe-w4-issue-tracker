import styled, { css } from "styled-components";

export const TextInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  background: #eff0f6;
  border-color: transparent;
  box-sizing: border-box;

  &:focus {
    background: #fefefe;
    border: 1px solid #14142b;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
        `
      : ``}
`;

export const LargeTextInput = styled(TextInput)`
  width: 340px;
  height: 64px;
  border-radius: 16px;
`;

export const MediumTextInput = styled(TextInput)`
  width: 320px;
  height: 56px;
  border-radius: 14px;
`;

export const SmallTextInput = styled(TextInput)`
  width: 300px;
  height: 40px;
  border-radius: 11px;
`;
