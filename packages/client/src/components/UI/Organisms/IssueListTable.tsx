import { TableHeader, TableCell } from "@UI/Molecules";

import styled from "@emotion/styled";
import { useGetIssue } from "@querys/Issue";
import { Issue } from "@types";
import { useCallback } from "react";

const IssueListTable = () => {
  const { data: issueList, isLoading } = useGetIssue();

  const createIssueList = useCallback(
    (issueList: Issue[]) =>
      issueList.map((issue: Issue) => (
        <TableCell key={issue.id} issue={issue} />
      )),
    [issueList]
  );

  if (isLoading) return <div>로딩중</div>;

  return (
    <Wrapper className="IssueListTable">
      <TableHeader />
      {createIssueList(issueList as Issue[])}
    </Wrapper>
  );
};

export default IssueListTable;

const Wrapper = styled.section`
  ${({ theme }) => theme.FlexCenter}
  margin-top: 24px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 16px;
  & > .TableHeader {
    border-radius: 16px 16px 0 0;
  }
  & > .TableCell:last-child {
    border-radius: 0 0 16px 16px;
  }
`;
