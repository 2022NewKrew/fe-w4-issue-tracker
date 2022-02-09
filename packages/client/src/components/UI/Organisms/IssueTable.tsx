import { IssueTableHeader, IssueTableCell } from "@UI/Molecules";

import styled from "@emotion/styled";

import { Issue } from "@types";

import withSuspense from "@templetes/withSuspense";
import { useIssueStore } from "@stores/issue";
import { useMemo } from "react";
import Atoms from "@UI/Atoms";

const IssueTable = () => {
  const { issueList, filter } = useIssueStore();

  const filtedIssueList = useMemo(
    () => issueList.filter(({ status }) => status === filter.status),
    [issueList, filter]
  );

  return (
    <Wrapper className="IssueListTable">
      <IssueTableHeader />
      {filtedIssueList.length ? (
        filtedIssueList.map((issue: Issue) => (
          <IssueTableCell key={issue.id} issue={issue} />
        ))
      ) : (
        <EmptyCell>등록된 이슈가 없습니다.</EmptyCell>
      )}
    </Wrapper>
  );
};

export default withSuspense(IssueTable);

const Wrapper = styled(Atoms.Ul)`
  ${({ theme }) => theme.FlexCenter}
  margin-top: 24px;
  width: 100%;
`;

const EmptyCell = styled(Atoms.Li)`
  height: 100px;
  color: var(--label);
  ${({ theme }) => theme.FlexCenter}
`;
