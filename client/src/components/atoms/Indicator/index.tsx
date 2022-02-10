import React from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { DropIcon } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface IIndicatorProps {
  children?: React.ReactNode;
  styles?: IStyle;
  onClick?: VoidFunction;
}
const Indicator: React.FC<IIndicatorProps> = ({ styles, children, onClick }) => {
  const SelectDropdownProps = {
    ...styles,
    onClick,
  };
  return (
    <SelectDropdown {...SelectDropdownProps}>
      {children}
      <DropIcon />
    </SelectDropdown>
  );
};

const SelectDropdown = styled.div<IStyle>`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${theme.color.body};
  }
  & > svg {
    margin-bottom: 2px;
    margin-left: 5px;
  }
  ${({ width, height, margin, color }) => css`
    width: ${width ?? ""};
    height: ${height ?? "32px"};
    line-height: ${height ?? "32px"};
    color: ${color ?? theme.color.label};
    margin: ${margin ?? ""};
  `}
`;
export default Indicator;
