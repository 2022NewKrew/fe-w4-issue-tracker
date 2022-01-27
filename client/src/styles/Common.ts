import { css } from "styled-components";
import { theme } from "@/styles/theme";

export const inputWrapStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 24px;
`;
export const inputWrapMediaStyle = css`
  &.initial {
    background: ${theme.color.inputBackground};
  }
  &.active {
    background: ${theme.color.offWhite};
    border: 1px solid ${theme.color.titleActive};
  }
  &.filled {
    background: ${theme.color.inputBackground};
  }
  &.typing {
    background: ${theme.color.offWhite};
    border: 1px solid ${theme.color.titleActive};
  }
`;
export const inputWrapSuccessStyle = css`
  &.success {
    background: ${theme.color.successC1};
    border: 1px solid ${theme.color.success};
  }
`;
export const inputWrapErrorStyle = css`
  &.error {
    background: ${theme.color.errorC1};
    border: 1px solid ${theme.color.error};
  }
`;
export const inputMessageMediaStyle = css`
  &.success {
    display: flex;
    color: ${theme.color.success};
  }
  &.error {
    display: flex;
    color: ${theme.color.error};
  }
`;
export const inputLabelStyle = css`
  font-weight: 500;
  display: none;
`;
export const inputTagStyle = css`
  background-color: inherit;
  border: 0px solid rgba(255, 255, 255, 0);
  :focus-visible,
  :focus-within,
  :focus {
    outline: 1px solid rgba(255, 255, 255, 0);
    border: 0px solid rgba(255, 255, 255, 0);
  }
`;
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const buttonContentStyle = css`
  padding-top: 2px;
  flex: none;
  flex-grow: 0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;
