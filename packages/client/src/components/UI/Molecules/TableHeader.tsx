import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useIssueStore } from "@stores/issue";
import { FilterTabs } from ".";
import { IssueStatus } from "@types";

const TableHeader = () => {
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
    <Wrapper className="TableHeader">
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
          >
            열린 이슈({issueListCount.openCount})
          </Atoms.Button>
          <Atoms.Button
            size="medium"
            shape="text"
            icon="close"
            data-status="close"
            onClick={onClick}
            active={filter.status === "close"}
          >
            닫힌 이슈({issueListCount.closeCount})
          </Atoms.Button>
        </Atoms.ButtonGroup>
      )}
      <FilterTabs />
    </Wrapper>
  );
};

export default TableHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: var(--background);
  padding: 16px 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 80px;
  & > svg {
    top: 24px;
    left: 32px;
  }
  & > span {
    font-weight: bold;
    color: var(--label);
  }
  & > .ButtonGroup > .Button {
    width: 105px;
    height: 32px;
    .active {
      color: var(--titleActive);
    }
  }
`;
