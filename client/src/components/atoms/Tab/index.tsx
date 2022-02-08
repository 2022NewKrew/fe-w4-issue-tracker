import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Milestone, LabelTag } from "../Icons";
import { IStyle } from "@/constants/type";

interface ITapProps {
  styles?: IStyle;
}
const Tap: React.FC<ITapProps> = ({ styles }) => {
  const TapWrapProps = {
    ...styles,
  };
  return (
    <TapWrap {...TapWrapProps}>
      <TapContent>
        <LabelTag />
        레이블 (0)
      </TapContent>
      <TapLine />
      <TapContent>
        <Milestone />
        마일스톤 (0)
      </TapContent>
    </TapWrap>
  );
};

const TapContent = styled.div``;
const TapLine = styled.div``;
const TapWrap = styled.div`
  width: 321px;
  height: 40px;
  border: 1px solid ${theme.color.line};
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${TapContent} {
    cursor: pointer;
    width: 160px;
    height: 38px;
    line-height: 38px;
    display: flex;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    color: ${theme.color.label};
    background: ${theme.color.background};
    border-radius: 11px 0px 0px 11px;
    svg {
      margin-bottom: 3px;
      margin-right: 10px;
    }
    &:last-child {
      border-radius: 0px 11px 11px 0px;
    }
    &:hover {
      background: ${theme.color.inputBackground};
    }
    &:active {
      background: ${theme.color.line};
      color: ${theme.color.body};
    }
  }
  ${TapLine} {
    width: 1px;
    height: 38px;
    background: ${theme.color.line};
  }
`;

export default Tap;
