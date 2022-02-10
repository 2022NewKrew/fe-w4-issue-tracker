import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getIssueById } from "../../../api";
import { Button } from "../../atoms/Button";
import { LargeLabel } from "../../atoms/Label";
import { cssFontSize } from "../../atoms/Text";
import { Comment } from "../../molecules/Comment";
import { Sidebar } from "../../molecules/SideBar";

export const IssueDetail = () => {
  // get id from
  const { issueId } = useParams();

  // server state
  const { data: issue } = useQuery(["issues", issueId], () => getIssueById(issueId));
  if (!issue) {
    return <div>loading</div>;
  }

  const isOpen = issue.status === "open";
  const StatusButton = isOpen ? (
    <Button options={{ type: "Small-Secondary", prefixIcon: "archive" }}>이슈 닫기</Button>
  ) : (
    <Button options={{ type: "Small-Secondary", prefixIcon: "alert-circle" }}>다시 열기</Button>
  );
  const commentList = issue.comments.map((comment) => <Comment key={comment.id} comment={comment} />);

  return (
    <>
      <FlexWrapper>
        <IssueTitle>{issue.title}</IssueTitle>
        <IssueNum>{`#${issue.num}`}</IssueNum>
        <RightItemWrapper>
          <Button options={{ type: "Small-Secondary", prefixIcon: "edit" }}>제목 편집</Button>
          {StatusButton}
        </RightItemWrapper>
      </FlexWrapper>
      <FlexWrapper>
        <LargeLabel isOpen={isOpen} />
        <Description>{"이 이슈가 20분 전에 열렸습니다."}</Description>
        <Description>∙</Description>
        <Description>{`코멘트 ${issue.comments.length}개`}</Description>
      </FlexWrapper>
      <LineTop />
      <IssueBodyWrapper>
        <CommentListWrapper>{commentList}</CommentListWrapper>
        <Sidebar issue={issue} />
      </IssueBodyWrapper>
    </>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const IssueTitle = styled.p`
  ${cssFontSize["title"]}
  color: ${({ theme }) => theme.grayscale.titleActive};
`;

const IssueNum = styled.p`
  ${cssFontSize["title"]}
  color: ${({ theme }) => theme.grayscale.label};
  margin-left: 16px;
`;

const RightItemWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

const Description = styled.p`
  ${cssFontSize["medium"]}
  color: ${({ theme }) => theme.grayscale.body};
`;

const LineTop = styled.div`
  margin: 32px 0;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.grayscale.line};
`;

const IssueBodyWrapper = styled.div`
  display: flex;
`;

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  margin-right: 32px;

  & > * {
    margin-bottom: 24px;
  }
`;
