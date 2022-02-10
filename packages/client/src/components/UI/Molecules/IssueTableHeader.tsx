import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { useIssueStore } from "@stores/issue";
import { CustomButton, FilterTabs } from ".";

const IssueTableHeader = () => {
  const { selectedIssue, selectAll, setSelectAll } = useIssueStore();

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
        <CustomButton.IssueTableIssueStatusButton />
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
    min-width: 105px;
    .active {
      color: var(--titleActive);
    }
  }
`;
