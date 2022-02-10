import React, { EventHandler, useCallback } from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { PanelOption } from "@/components/atoms";
import { IStyle } from "@/constants/type";

interface IPanelProps {
  type: "text" | "imageText" | "modify" | string;
  optionList: any[];
  onSelect?: EventHandler<any>;
  onClick?: EventHandler<any>;
  styles?: IStyle;
  title?: string;
  visible?: boolean;
}

const transOptionTag = (
  optionList: any[] = [],
  type: "text" | "imageText" | "modify" | string,
  userIcon?: any,
) => {
  const contentClickHandler: EventHandler<any> = useCallback(({ target }) => {
    if (target.tagName !== "svg") return;
    target.parentNode.classList.toggle("selected");
  }, []);
  const PanelOptionProps = {
    type: type,
    userIcon: userIcon,
    onClick: contentClickHandler,
  };
  return optionList.map((item, idx) => (
    <PanelOption key={`PanelOption${idx}`} {...PanelOptionProps}>
      {item}
    </PanelOption>
  ));
};

const Panel: React.FC<IPanelProps> = ({ title, type, optionList, styles, visible }) => {
  const PanelWrapProps = {
    ...styles,
    visible,
  };
  const PanelOptions = transOptionTag(optionList, type);
  return (
    <PanelWrap {...PanelWrapProps}>
      <PanelTitle>{title}</PanelTitle>
      {PanelOptions}
    </PanelWrap>
  );
};

const PanelTitle = styled.div``;
const PanelWrap = styled.div<any>`
  ${({ visible, childCSS }) => css`
    display: ${visible ? "" : "none"};
    ${childCSS ?? ""};
  `};
  z-index: 3;
  width: 240px;
  background: ${theme.color.line};
  border: 1px solid ${theme.color.body};
  border-radius: 16px;
  ${PanelTitle} {
    height: 48px;
    line-height: 48px;
    padding-left: 16px;
    font-size: 18px;
    color: ${theme.color.body};
  }
`;

export default Panel;
