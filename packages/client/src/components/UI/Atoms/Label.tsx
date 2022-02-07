import { LayoutProps } from "@emotion/react";
import styled from "@emotion/styled";
import Icon from "@UI/Icon";

export interface Props extends SProps, LayoutProps {}

const Label = ({ type, color, children }: Props) => {
  return (
    <SLabel className="Label" type={type} color={color}>
      {type === "open" && [<Icon name="issue_open_blue" />, "열린 이슈"]}
      {type === "close" && [<Icon name="issue_close" />, "닫힌 이슈"]}
      {type === "athor" && "작성자"}
      {children}
    </SLabel>
  );
};

export default Label;

interface SProps {
  type: "open" | "close" | "dark" | "light" | "athor" | "custom";
  color?: string;
}

const SLabel = styled.label<SProps>`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 4px 16px;
  ${({ theme }) => theme.FontSize.xsmall};
  ${({ type, color }) =>
    type !== "custom"
      ? typeList[type]
      : `
        width: max-content;
        color: var(--offWhite);
        background: ${color};
        `}
  & > svg {
    position: static;
    margin-right: 3px;
  }
`;

const typeList = {
  open: `
    width: 100px;
    height: 40px;
    background: var(--primary-light);
    border: 1px solid var(--primary-default);
    color: var(--primary-default);
  `,
  close: `
    width: 100px;
    height: 40px;
    background: #ccd4ff;
    border: 1px solid #0025e7;
    color: #0025e7;
  `,
  dark: `
    width: max-content;
    height: 28px;
    background: var(--background);
    color: var(--titleActive);
  `,
  light: `
    width: max-content;
    height: 28px;
    background: var(--body);
    color: var(--offWhite);
  `,
  athor: `
    width: 66px;
    height: 28px;
    color: var(--label);
    border: 1px solid var(--line);
  `,
};
