import { TableHeader, TableCell } from "@UI/Molecules";

import styled from "@emotion/styled";

import { Issue } from "@types";

import withSuspense from "@templetes/withSuspense";
import { useIssueStore } from "@stores/issue";
import { useMemo } from "react";

const IssueListTable = () => {
  const { issueList, filter } = useIssueStore();

  const filtedIssueList = useMemo(
    () => issueList.filter(({ status }) => status === filter.status),
    [issueList, filter]
  );

  return (
    <Wrapper className="IssueListTable">
      <TableHeader />
      {filtedIssueList.length ? (
        filtedIssueList.map((issue: Issue) => (
          <TableCell key={issue.id} issue={issue} />
        ))
      ) : (
        <EmptyCell>등록된 이슈가 없습니다.</EmptyCell>
      )}
    </Wrapper>
  );
};

export default withSuspense(IssueListTable);

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
