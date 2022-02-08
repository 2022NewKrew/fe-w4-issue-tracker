import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { CheckCircle } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface IPanelOptionProps {
  type: string;
  userIcon?: any;
  onClick?: any;
  styles?: IStyle;
}
const PanelOption: React.FC<IPanelOptionProps> = ({
  type,
  userIcon,
  children,
  onClick,
  styles,
}) => {
  const Props = {
    StylePanelContentProps: {
      ...styles,
    },
    CheckCircleProps: {
      onClick: onClick,
    },
  };

  return (
    <StyledPanelContent {...Props.StylePanelContentProps}>
      {type === "imageText" && userIcon}
      <StyledPanelOption>{children}</StyledPanelOption>
      {type !== "modify" && <CheckCircle type="off" {...Props.CheckCircleProps} />}
    </StyledPanelContent>
  );
};

const StyledPanelContent = styled.div`
  background: ${theme.color.offWhite};
  position: relative;
  border-top: 1px solid ${theme.color.line};
  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  &.selected > * {
    color: ${theme.color.titleActive};
  }
`;

const StyledPanelOption = styled.option`
  height: 43px;
  line-height: 43px;
  padding-left: 16px;
  font-size: 16px;
  position: relative;
  background: ${theme.color.offWhite};
  color: ${theme.color.body};
  border-radius: 0px 0px 16px 16px;
`;
export default PanelOption;
