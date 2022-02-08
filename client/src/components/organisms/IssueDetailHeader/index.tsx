import React from "react";
import styled from "styled-components";
import { Button } from "@/components/atoms";
import { IStyle } from "@/constants/type";
import { Edit, Close } from "@/components/atoms/Icons";

interface IIssueDetailHeaderProps {
  styles?: IStyle;
}
const IssueDetailHeader: React.FC<IIssueDetailHeaderProps> = ({ styles, children }) => {
  const Props = {
    EditHeaderProps: {
      iconType: <Edit />,
    },
    CloseHeaderProps: {
      iconType: <Close />,
    },
  };
  return (
    <IssueHeaderWrap>
      <IssueHeader>
        {children ?? "FE 이슈트래커 디자인 시스템 구현 #2"}
        <IssueHeaderBtnWrap>
          <Button type="smallSecondary" {...Props.EditHeaderProps}>
            제목 편집
          </Button>
          <Button type="smallSecondary" {...Props.CloseHeaderProps}>
            이슈 닫기
          </Button>
        </IssueHeaderBtnWrap>
      </IssueHeader>
    </IssueHeaderWrap>
  );
};
const IssueHeaderBtnWrap = styled.div``;
const IssueHeader = styled.div``;
const IssueHeaderWrap = styled.div`
  ${IssueHeader} {
    height: 48px;
    width: 1280px;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    color: #14142b;
    display: flex;
    justify-content: space-between;
    ${IssueHeaderBtnWrap} {
      width: content-fit;
      display: flex;
    }
  }
`;

export default IssueDetailHeader;
