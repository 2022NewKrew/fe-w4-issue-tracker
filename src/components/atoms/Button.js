import React from "react";
import styled, { css } from "styled-components";

const BTN_COLOR = {
  BLACK: {
    INITIAL: "#14142b",
    HOVER: "#1e1e40",
    ACTIVATED: "#d9dbe9",
  },
  BLUE: {
    INITIAL: "#007aff",
    HOVER: "#004de3",
    ACTIVATED: "#c7ebff",
  },
};

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #fefefe;
  border: 4px solid transparent;

  ${({ color }) => {
    const { INITIAL, HOVER, ACTIVATED } = BTN_COLOR[color];
    return css`
      background: ${INITIAL};
      &:hover {
        background: ${HOVER};
      }
      &:active {
        border-color: ${ACTIVATED};
      }
    `;
  }}

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
        `
      : ``}
`;

export const LargeButton = styled(Button)`
  padding: 0 24px;
  border-radius: 20px;
  width: 340px;
  height: 64px;
  &:active {
    border-color: #c7ebff;
  }
`;
export const MediumStandardButton = styled(Button)`
  padding: 0 24px;
  border-radius: 20px;
  width: 340px;
  height: 64px;
`;
export const SmallStandardButton = styled(Button)`
  padding: 0 16px;
  border-radius: 11px;
  width: 120px;
  height: 40px;
`;
export const SmallSecondaryButton = styled(Button)`
  padding: 0 16px;
  border-radius: 11px;
  width: 120px;
  height: 40px;
  ${({ color }) => {
    const { INITIAL, HOVER } = BTN_COLOR[color];
    return css`
      border: 2px solid ${INITIAL};
      background-color: transparent;
      color: ${INITIAL};
      &:hover {
        color: ${HOVER};
        border-color: ${HOVER};
      }
    `;
  }}
`;
