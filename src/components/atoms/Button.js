import styled, { css } from "styled-components";
import { COLOR } from "@constants";

export const Button = styled.button`
  display: flex;
  ${({ direction }) =>
    css`
      flex-direction: ${direction};
    `};
  justify-content: center;
  align-items: center;

  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #fefefe;
  border: 4px solid transparent;

  svg {
    color: ${COLOR.GREYSCALE.OFF_WHITE};
  }

  ${({ color, disabled }) => {
    const { INITIAL, HOVER, ACTIVATED } = color;
    return disabled
      ? css`
          background: ${INITIAL};
          opacity: 0.5;
        `
      : css`
          background: ${INITIAL};
          &:active {
            border-color: ${ACTIVATED};
          }
          &:hover {
            background: ${HOVER};
          }
        `;
  }}
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
    const { INITIAL, HOVER } = color;
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
