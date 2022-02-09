import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { currentTableIssueStatusState } from "@recoils/issueTable";
import { FilterTabs } from ".";

const TableHeader = () => {
  const [issueStatus, setIssueStatus] = useRecoilState(
    currentTableIssueStatusState
  );

  const onClick = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const btn = (target as HTMLElement).closest("button");
    if (!btn || !btn.dataset.status) return;
    const issueStatus = btn.dataset.status as "open" | "close";
    setIssueStatus(issueStatus);
  };

  return (
    <Wrapper className="TableHeader">
      <Icon name="check_box_initial" />
      <Atoms.ButtonGroup gap={24}>
        <Atoms.Button
          size="medium"
          shape="text"
          icon="open"
          data-status="open"
          onClick={onClick}
          active={issueStatus === "open"}
        >
          열린 이슈(2)
        </Atoms.Button>
        <Atoms.Button
          size="medium"
          shape="text"
          icon="close"
          data-status="close"
          onClick={onClick}
          active={issueStatus === "close"}
        >
          닫힌 이슈(2)
        </Atoms.Button>
      </Atoms.ButtonGroup>
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
  & > svg {
    top: 24px;
  }
  & > .ButtonGroup {
    margin-left: 48px;
    & > .Button {
      width: 105px;
      height: 32px;
      .active {
        color: var(--titleActive);
      }
    }
  }
`;
