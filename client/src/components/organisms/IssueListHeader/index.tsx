import React from "react";
import styled, { css } from "styled-components";
import { FilterBar } from "@/components/atoms";
import { IssueFilterOption } from "@/components/molecules";
import { IStyle } from "@/constants/type";

interface IIssueHeaderProps {
  styles?: IStyle;
}
const IssueHeader: React.FC<IIssueHeaderProps> = ({ styles }) => {
  return (
    <IssueHeaderWrap {...styles}>
      <FilterBar />
      <IssueFilterOption />
    </IssueHeaderWrap>
  );
};

const IssueOptionWrap = styled.div``;
const IssueHeaderWrap = styled.div<any>`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  ${IssueOptionWrap} {
    display: flex;
    & > * {
      margin-left: 16px;
    }
  }
  margin: 0px 0px 24px 0px;
`;
export default IssueHeader;
