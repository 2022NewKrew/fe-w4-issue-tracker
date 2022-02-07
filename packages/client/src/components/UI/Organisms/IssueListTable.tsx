import { TableHeader, TableCell } from "@UI/Molecules";

import styled from "@emotion/styled";

import { Issue } from "@types";
import { useCallback } from "react";
import { useRecoilValueLoadable } from "recoil";
import { filteredIssueListState } from "@recoils/issueTable";

const IssueListTable = () => {
  const { state, contents: issueList } = useRecoilValueLoadable(
    filteredIssueListState
  );

  const createIssueList = useCallback(
    (issueList: Issue[]) =>
      issueList.map((issue: Issue) => (
        <TableCell key={issue.id} issue={issue} />
      )),
    [issueList]
  );

  if (state === "loading") return <div>로딩중</div>;

  return (
    <Wrapper className="IssueListTable">
      <TableHeader />
      {issueList.length ? (
        createIssueList(issueList)
      ) : (
        <EmptyCell>등록된 이슈가 없습니다.</EmptyCell>
      )}
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

const EmptyCell = styled.li`
  width: 100%;
  height: 100px;
  background: var(--offWhite);
  color: var(--label);
  border-top: 1px solid var(--line);
  ${({ theme }) => theme.FlexCenter}
  border-radius: 0 0 16px 16px;
`;
