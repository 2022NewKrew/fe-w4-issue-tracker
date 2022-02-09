import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useIssueStore } from "@stores/issue";
import { FilterTabs } from ".";
import { IssueStatus } from "@types";

const IssueTableHeader = () => {
  const {
    issueListCount,
    filter,
    setFilter,
    selectedIssue,
    selectAll,
    setSelectAll,
  } = useIssueStore();

  const onClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const btn = (target as HTMLElement).closest("button");
    if (!btn || !btn.dataset.status) return;
    const status = btn.dataset.status as IssueStatus;
    setFilter((prev) => ({ ...prev, status }));
  };

  return (
    <Wrapper className="TableHeader" header>
      <Icon
        name={selectAll ? "check_box_active" : "check_box_initial"}
        onClick={() => {
          setSelectAll((prev) => !prev);
        }}
      />
      {selectedIssue.length ? (
        <span>{selectedIssue.length}개 이슈 선택</span>
      ) : (
        <Atoms.ButtonGroup gap={24}>
          <Atoms.Button
            size="medium"
            shape="text"
            icon="open"
            data-status="open"
            onClick={onClick}
            active={filter.status === "open"}
            text={`열린 이슈(${issueListCount.openCount})`}
          />
          <Atoms.Button
            size="medium"
            shape="text"
            icon="close"
            data-status="close"
            onClick={onClick}
            active={filter.status === "close"}
            text={`닫힌 이슈(${issueListCount.closeCount})`}
          />
        </Atoms.ButtonGroup>
      )}
      <FilterTabs />
    </Wrapper>
  );
};

export default IssueTableHeader;

const Wrapper = styled(Atoms.Li)`
  height: 64px;
  padding: 0 32px 0 80px;
  & > svg {
    top: 24px;
    left: 32px;
  }
  & > span {
    font-weight: bold;
    color: var(--label);
  }
  & > .ButtonGroup > button {
    width: 105px;
    .active {
      color: var(--titleActive);
    }
  }
`;
