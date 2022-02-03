import styled from "@emotion/styled";

export interface Props extends SProps {
  id?: string;
  label?: string;
}

const Placeholder = ({ id, label, size, typing }: Props) => {
  return (
    <SPlaceholder
      htmlFor={id}
      size={size}
      typing={typing}
      className="Placeholder"
    >
      {label}
    </SPlaceholder>
  );
};

export default Placeholder;

interface SProps {
  size: "large" | "medium" | "small";
  typing: boolean;
}

const SPlaceholder = styled.label<SProps>`
  position: absolute;
  left: 24px;
  display: flex;
  align-items: center;
  padding-left: 3px;
  color: ${({ typing }) => (typing ? "var(--label)" : "var(--placeholer)")};
  transition: all 0.3s ease;
  ${({ typing, theme }) => typing && theme.FontSize.xsmall}
  ${({ typing, size }) => (typing ? typingList[size] : sizeList[size])};
`;

const sizeList = {
  large: `
    height: 28px;
    top: 18px;
  `,
  medium: `
    height: 28px;
    top: 14px;
  `,
  small: `
    height: 40px;
    top: 0px;
  `,
};

const typingList = {
  large: `
    height: 20px;
    top: 8px;
  `,
  medium: `
    height: 20px;
    top: 4px;
  `,
  small: `
  height: 40px;
  top: 1px;
  `,
};
