import React, { EventHandler, useCallback } from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { PanelOption } from "@/components/atoms";
import { IStyle } from "@/constants/type";

interface IPanelProps {
  type: "text" | "imageText" | "modify";
  optionList: string[];
  onSelect?: EventHandler<any>;
  onClick?: EventHandler<any>;
  styles?: IStyle;
}
const transOptionTag = (
  optionList: string[] = [],
  type: "text" | "imageText" | "modify",
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
const Panel: React.FC<IPanelProps> = ({ type, optionList, styles }) => {
  const PanelWrapProps = {
    ...styles,
  };
  const PanelOptions = transOptionTag(optionList, type);
  return (
    <PanelWrap {...PanelWrapProps}>
      <PanelTitle>필터 이름</PanelTitle>
      {PanelOptions}
    </PanelWrap>
  );
};

const PanelTitle = styled.div``;
const PanelWrap = styled.div`
  width: 240px;
  height: 183px;
  background: ${theme.color.line};
  border: 1px solid ${theme.color.line};
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
