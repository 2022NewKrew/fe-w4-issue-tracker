import styled from "@emotion/styled";

export interface SProps {
  size?: "large" | "small";
  type?: "open" | "close" | "dark" | "light" | "line" | "custom";
  color: string;
}

const Label = styled.label<SProps>`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 4px 16px;
  height: ${({ size = "small" }) => (size === "large" ? "40px" : "28px")};
  ${({ theme }) => theme.FontSize.xsmall};
  ${({ type = "custom", color }) =>
    type === "custom"
      ? `
        color: var(--offWhite);
        background: ${color};
        `
      : typeList[type]}
`;

export default Label;

const typeList = {
  open: `
    background: var(--primary-light);
    border: 1px solid var(--primary-default);
    color: var(--primary-default);
  `,
  close: `
    background: #ccd4ff;
    border: 1px solid #0025e7;
    color: #0025e7;
  `,
  dark: `
    background: var(--background);
    color: var(--titleActive);
  `,
  light: `
    background: var(--body);
    color: var(--offWhite);
  `,
  line: `
    background: var(--offWhite);
    color: var(--line);
    border: 1px solid var(--line);
  `,
};
