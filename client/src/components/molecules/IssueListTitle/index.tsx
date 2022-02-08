import React from "react";
import styled, { css } from "styled-components";
import { Indicator, Label } from "@/components/atoms";
import { IStyle } from "@/constants/type";

interface IIssueListTitle {
  styles?: IStyle;
  open?: number;
  close?: number;
}
const IssueListTitle: React.FC<IIssueListTitle> = ({ styles, open = 2, close = 0 }) => {
  const Props = {
    IssueTitleWrapProps: {
      ...styles,
    },
    OpenLabelProps: {
      styles: {
        background: "#F7F7FC",
        color: "#14142B",
        fontSize: "16px",
      },
    },
    CloseLabelProps: {
      styles: {
        background: "#F7F7FC",
        color: "#6E7191",
        fontSize: "16px",
        width: "120px",
        margin: "0px 0px 0px 4px",
      },
    },
  };

  return (
    <IssueTitleWrap {...Props.IssueTitleWrapProps}>
      <IssueCheckInput>
        <input type="checkbox" name="xxx" value="yyy" />
      </IssueCheckInput>
      <IssueTitleMeta>
        <Label type="large-open" {...Props.OpenLabelProps}>
          ({open})
        </Label>
        <Label type="large-close" {...Props.CloseLabelProps}>
          ({close})
        </Label>
      </IssueTitleMeta>
      <IssueTitleFilter>
        <Indicator>담당자</Indicator>
        <Indicator>레이블</Indicator>
        <Indicator>마일스톤</Indicator>
        <Indicator>작성자</Indicator>
      </IssueTitleFilter>
    </IssueTitleWrap>
  );
};

const IssueCheckInput = styled.div``;
const IssueTitleMeta = styled.div``;
const IssueTitleFilter = styled.div``;
const IssueTitleWrap = styled.div<IStyle>`
  ${({ width, height }) => {
    return css`
      width: ${width ?? "1280px"};
      height: ${height ?? "64px"};
    `;
  }}
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-left: 80px;
  position: relative;
  ${IssueCheckInput} {
    width: 80px;
    position: absolute;
    left: 32px;
    top: 26px;
    & > input {
      width: 16px;
      height: 16px;
    }
  }
  ${IssueTitleMeta} {
    display: flex;
    justify-content: flex-start;
  }
  ${IssueTitleFilter} {
    display: flex;
    & > div {
      margin-right: 32px;
    }
  }
`;
export default IssueListTitle;
