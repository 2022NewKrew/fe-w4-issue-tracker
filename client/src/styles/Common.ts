import { css } from "styled-components";

export const InputWrapStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 24px;
`;
export const InputWrapMediaStyle = css`
  &.initial {
    background: ${({ theme }) => theme.color.inputBackground};
  }
  &.active {
    background: ${({ theme }) => theme.color.offWhite};
    border: 1px solid ${({ theme }) => theme.color.titleActive};
  }
  &.filled {
    background: ${({ theme }) => theme.color.inputBackground};
  }
  &.typing {
    background: ${({ theme }) => theme.color.offWhite};
    border: 1px solid ${({ theme }) => theme.color.titleActive};
  }
`;
export const InputWrapSuccessStyle = css`
  &.success {
    background: ${({ theme }) => theme.color.successC1};
    border: 1px solid ${({ theme }) => theme.color.success};
  }
`;
export const InputWrapErrorStyle = css`
  &.error {
    background: ${({ theme }) => theme.color.errorC1};
    border: 1px solid ${({ theme }) => theme.color.error};
  }
`;
export const InputMessageMediaStyle = css`
  &.success {
    display: flex;
    color: ${({ theme }) => theme.color.success};
  }
  &.error {
    display: flex;
    color: ${({ theme }) => theme.color.error};
  }
`;
export const InputLabelStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  display: none;
`;
export const InputTagStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  background-color: inherit;
  border: 0px solid rgba(255, 255, 255, 0);
  :focus-visible,
  :focus-within,
  :focus {
    outline: 1px solid rgba(255, 255, 255, 0);
    border: 0px solid rgba(255, 255, 255, 0);
  }
`;
