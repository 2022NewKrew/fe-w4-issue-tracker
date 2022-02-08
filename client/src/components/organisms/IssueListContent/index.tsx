import React, { useCallback } from "react";
import styled from "styled-components";
import { IssueListTitle, IssueListItem } from "@/components/molecules";
import { useNavigate } from "react-router-dom";

const IssueList: React.FC = ({}) => {
  const navigate = useNavigate();
  const Props = {
    FirstItemProps: {
      issueTitle: "FE 이슈트래커 개발",
      issueNumber: "#2",
      issueInfo: "이 이슈가 10분 전, Oni님에 의해 작성되었습니다.",
      issueLabel: "documentation",
      onClick: useCallback(() => {
        navigate("/issue/1");
      }, []),
      styles: {
        height: "100px",
        background: "#004DE3",
      },
    },
    SecondItemProps: {
      issueTitle: "BE 이슈트래커 개발",
      issueNumber: "#3",
      issueInfo: "이 이슈가 30분 전, Oni님에 의해 작성되었습니다.",
      issueLabel: "label",
      onClick: useCallback(() => {
        navigate("/issue/1");
      }, []),
      styles: {
        background: "#F7F7FC",
        color: "#14142B",
        height: "100px",
      },
    },
  };
  return (
    <IssueListWrap>
      <IssueListTitle />
      <IssueListItem {...Props.FirstItemProps} />
      <IssueListItem {...Props.SecondItemProps} />
    </IssueListWrap>
  );
};
const IssueListWrap = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #d9dbe9;
  border-radius: 16px;
  overflow: hidden;
  & > * {
    border-bottom: 1px solid #d9dbe9;
  }
  & > *:last-child {
    border-bottom: 0px;
  }
`;
export default IssueList;
