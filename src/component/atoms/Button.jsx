import styled, { css, useTheme } from "styled-components";
import { Icon } from "./Icons";
import Text from "./Text";

export const LargeButton = ({ color = "primary", prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <FilledButton options={{ size: "large", color }} {...props}>
      <Icon name={prefixIcon} color={theme.grayscale.offWhite} />
      <Text options={{ size: "medium", isLink: true }}>{children}</Text>
    </FilledButton>
  );
};

export const MediumStandardButton = ({ color = "primary", prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <FilledButton options={{ size: "medium", color }} {...props}>
      <Icon name={prefixIcon} color={theme.grayscale.offWhite} />
      <Text options={{ size: "medium", isLink: true }}>{children}</Text>
    </FilledButton>
  );
};

export const SmallStandardButton = ({ color = "primary", prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <FilledButton options={{ size: "small", color }} {...props}>
      <Icon name={prefixIcon} color={theme.grayscale.offWhite} />
      <Text options={{ size: "xsmall", isLink: true }}>{children}</Text>
    </FilledButton>
  );
};

export const SmallSecondaryButton = ({ color = "primary", prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <EmptyButton options={{ size: "small", color }} {...props}>
      <Icon name={prefixIcon} color={themeColor(theme, color).default} />
      <Text options={{ size: "xsmall", isLink: true }}>{children}</Text>
    </EmptyButton>
  );
};

export const MediumTextButton = ({ prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <TextButton options={{ size: "text" }} {...props}>
      <Icon name={prefixIcon} color={theme.grayscale.label} />
      <Text options={{ size: "small", isLink: true }}>{children}</Text>
    </TextButton>
  );
};

export const SmallTextButton = ({ prefixIcon, children, ...props }) => {
  const theme = useTheme();
  return (
    <TextButton options={{ size: "text" }} {...props}>
      <Icon name={prefixIcon} color={theme.grayscale.label} />
      <Text options={{ size: "xsmall", isLink: true }}>{children}</Text>
    </TextButton>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ options: { size } }) => (size ? sizeType[size] : null)}

  // 좀 더 좋은 방법 있으면 나중에 수정 예정..
  & > * {
    margin: 0px 2px;
  }
`;

const FilledButton = styled(Button)`
  color: ${({ theme }) => theme.grayscale.offWhite};
  background-color: ${({ theme, options: { color } }) => themeColor(theme, color).default};

  &:enabled:hover {
    background-color: ${({ theme, options: { color } }) => themeColor(theme, color).dark};
  }

  &:enabled:focus {
    box-shadow: 0 0 0 4px ${({ theme, options: { color } }) => themeColor(theme, color).light};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const EmptyButton = styled(Button)`
  color: ${({ theme, options: { color } }) => themeColor(theme, color).default};
  background-color: ${({ theme }) => theme.grayscale.offWhite};
  border: 2px solid ${({ theme, options: { color } }) => themeColor(theme, color).default};

  &:enabled:hover {
    color: ${({ theme, options: { color } }) => themeColor(theme, color).dark};
    border-color: ${({ theme, options: { color } }) => themeColor(theme, color).dark};
  }

  &:enabled:focus {
    box-shadow: 0 0 0 4px ${({ theme, options: { color } }) => themeColor(theme, color).light};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const TextButton = styled(Button)`
  color: ${({ theme }) => theme.grayscale.label};

  &:hover {
    color: ${({ theme }) => theme.grayscale.body};
  }

  &:active {
    color: ${({ theme }) => theme.grayscale.titleActive};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

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

const themeColor = (theme, color) => theme.color[color] ?? { default: color, dark: color, light: color };
