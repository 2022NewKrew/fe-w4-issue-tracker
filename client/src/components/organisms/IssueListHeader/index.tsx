import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IssueFilterOption, IssueFilterBar } from "@/components/molecules";
import { IStyle } from "@/constants/type";

interface IIssueHeaderProps {
  styles?: IStyle;
}
const IssueHeader: React.FC<IIssueHeaderProps> = ({ styles }) => {
  const IssueHeaderWrapProp = {
    ...styles,
  };
  return (
    <IssueHeaderWrap {...IssueHeaderWrapProp}>
      <IssueFilterBar />
      <IssueFilterOption />
    </IssueHeaderWrap>
  );
};

const IssueOptionWrap = styled.div``;
const IssueHeaderWrap = styled.div<any>`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  position: relative;
  ${IssueOptionWrap} {
    display: flex;
    & > * {
      margin-left: 16px;
    }
  }
  margin: 0px 0px 24px 0px;
`;
export default IssueHeader;
