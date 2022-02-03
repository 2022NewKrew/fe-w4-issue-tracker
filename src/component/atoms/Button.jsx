import styled, { css } from "styled-components";
import { Icon } from "./Icons";
import { cssFontSize, cssLink } from "./Text";

export const Button = ({ options, children, ...props }) => {
  const { type, prefixIcon, suffixIcon, color = "primary" } = options;
  const cssOptionProps = { ...buttonType[type], color };

  return (
    <StyledButton {...cssOptionProps} {...props}>
      {prefixIcon && <Icon name={prefixIcon} />}
      {children}
      {suffixIcon && <Icon name={suffixIcon} />}
    </StyledButton>
  );
};

const buttonType = {
  Large: { buttonSize: "large", buttonStyle: "filled", fontSize: "medium" },
  "Medium-Standard": { buttonSize: "medium", buttonStyle: "filled", fontSize: "medium" },
  "Small-Standard": { buttonSize: "small", buttonStyle: "filled", fontSize: "xsmall" },
  "Small-Secondary": { buttonSize: "small", buttonStyle: "empty", fontSize: "xsmall" },
  "Medium-Text": { buttonSize: "text", buttonStyle: "text", fontSize: "small" },
  "Small-Text": { buttonSize: "text", buttonStyle: "text", fontSize: "xsmall" },
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    // 좀 더 좋은 방법 있으면 나중에 수정 예정..
    margin: 0px 2px;
  }
  &:disabled {
    opacity: 0.5;
  }

  ${({ buttonSize }) => cssButtonSize[buttonSize]}
  ${({ buttonStyle }) => cssButtonStyle[buttonStyle]}
  ${({ fontSize }) => cssFontSize[fontSize]}
  ${cssLink}
`;

const cssButtonSize = {
  large: css`
    width: 340px;
    height: 64px;
    padding: 0px 24px;
    border-radius: 20px;
  `,
  medium: css`
    width: 240px;
    height: 56px;
    padding: 0px 24px;
    border-radius: 20px;
  `,
  small: css`
    width: 120px;
    height: 40px;
    padding: 0px 16px;
    border-radius: 11px;
  `,
  text: css`
    height: 32px;
  `,
};

const cssButtonStyle = {
  filled: ({ theme, color }) =>
    css`
      color: ${theme.grayscale.offWhite};
      background: ${theme.color[color].default};
      &:enabled:hover {
        background: ${theme.color[color].dark};
      }
      &:enabled:focus {
        outline: 4px solid ${theme.color[color].light};
      }
    `,
  empty: ({ theme, color }) =>
    css`
      color: ${theme.color[color].default};
      background-color: ${theme.grayscale.offWhite};
      border: 2px solid ${theme.color[color].default};
      &:enabled:hover {
        color: ${theme.color[color].dark};
        border-color: ${theme.color[color].dark};
      }
      &:enabled:focus {
        outline: 4px solid ${theme.color[color].light};
      }
    `,
  text: ({ theme }) =>
    css`
      color: ${theme.grayscale.label};
      &:hover {
        color: ${theme.grayscale.body};
      }
      &:active {
        color: ${theme.grayscale.titleActive};
      }
    `,
};
