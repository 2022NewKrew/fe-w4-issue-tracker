import styled, { css, useTheme } from "styled-components";
import { Icon } from "./Icons";
import { Text } from "./Text";

export const Button = ({ options, children, ...props }) => {
  const theme = useTheme();
  const { type, prefixIcon, color = "primary" } = options;

  const buttonOption = { ...buttonType[type], color };
  const textOption = buttonOption.textOption;

  const prefixIconColor = {
    filled: theme.grayscale.offWhite,
    empty: theme.color[color].default,
    text: theme.grayscale.label,
  };

  return (
    <StyledButton options={buttonOption} {...props}>
      {prefixIcon && <Icon name={prefixIcon} color={prefixIconColor[buttonOption.style]} />}
      <Text options={textOption}>{children}</Text>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    // 좀 더 좋은 방법 있으면 나중에 수정 예정..
    margin: 0px 2px;
  }
  &:disabled {
    opacity: 0.5;
  }

  ${({ theme, options }) => {
    return css`
      ${sizeType[options.size]}
      ${styleType({ theme, style: options.style, color: options.color })}
    `;
  }}
`;

const buttonType = {
  Large: {
    size: "large",
    style: "filled",
    textOption: {
      size: "medium",
      isLink: true,
    },
  },
  "Medium-Standard": {
    size: "medium",
    style: "filled",
    textOption: {
      size: "medium",
      isLink: true,
    },
  },
  "Small-Standard": {
    size: "small",
    style: "filled",
    textOption: {
      size: "xsmall",
      isLink: true,
    },
  },
  "Small-Secondary": {
    size: "small",
    style: "empty",
    textOption: {
      size: "xsmall",
      isLink: true,
    },
  },
  "Medium-Text": {
    size: "text",
    style: "text",
    textOption: {
      size: "small",
      isLink: true,
    },
  },
  "Small-Text": {
    size: "text",
    style: "text",
    textOption: {
      size: "xsmall",
      isLink: true,
    },
  },
};

const sizeType = {
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

const styleType = ({ theme, style, color }) => {
  const { default: base, dark, light } = theme.color[color];
  switch (style) {
    case "filled":
      return css`
        color: ${theme.grayscale.offWhite};
        background-color: ${base};
        &:enabled:hover {
          background-color: ${dark};
        }
        &:enabled:focus {
          box-shadow: 0 0 0 4px ${light};
        }
      `;
    case "empty":
      return css`
        color: ${base};
        background-color: ${theme.grayscale.offWhite};
        border: 2px solid ${base};
        &:enabled:hover {
          color: ${dark};
          border-color: ${dark};
        }
        &:enabled:focus {
          box-shadow: 0 0 0 4px ${light};
        }
      `;
    case "text":
      return css`
        color: ${theme.grayscale.label};
        &:hover {
          color: ${theme.grayscale.body};
        }
        &:active {
          color: ${theme.grayscale.titleActive};
        }
      `;
    default:
      throw Error("button style error");
  }
};
