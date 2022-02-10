import { Dropdown } from "@UI/Molecules";
import styled from "@emotion/styled";

import { useIssueMutation, useIssueStore } from "@stores/issue";
import { useCallback } from "react";
import { useUserStore } from "@stores/user";
import { useMilestoneStore } from "@stores/milestone";
import { useLabelStore } from "@stores/label";
import { arrayToggle } from "@utils/helper";
import { IssueStatus } from "@types";

const FilterTabs = () => {
  const { labelList } = useLabelStore();
  const { milestoneList } = useMilestoneStore();
  const { userList } = useUserStore();
  const { filter, setFilter, selectedIssue } = useIssueStore();

  const { modifyIssueStatus } = useIssueMutation();

  const onSelect = useCallback(
    (type: "assignees" | "label" | "milestone" | "author", id: string) => {
      if (type === "label") {
        setFilter((prev) => ({
          ...prev,
          label: arrayToggle(prev.label, id),
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          [type]: prev[type] === id ? null : id,
        }));
      }
    },
    []
  );

  const changeIssuesState = useCallback(
    (status: string) => {
      Promise.all(
        selectedIssue.map((issueId) =>
          modifyIssueStatus({ issueId, status: status as IssueStatus })
        )
      );
    },
    [selectedIssue]
  );

  return (
    <Wrapper>
      {selectedIssue.length ? (
        <Dropdown
          onSelect={changeIssuesState}
          indicator="상태변경"
          list={[
            { id: "open", name: "선택한 이슈 열기" },
            { id: "close", name: "선택한 이슈 닫기" },
          ]}
          icon={false}
        />
      ) : (
        [
          <Dropdown
            key="assignees"
            select={filter.assignees}
            onSelect={(id) => onSelect("assignees", id)}
            indicator="담당자"
            list={userList}
          />,
          <Dropdown
            key="label"
            select={filter.label}
            onSelect={(id) => onSelect("label", id)}
            indicator="레이블"
            list={labelList}
          />,
          <Dropdown
            key="milestone"
            select={filter.milestone}
            onSelect={(id) => onSelect("milestone", id)}
            indicator="마일스톤"
            list={milestoneList}
          />,
          <Dropdown
            key="author"
            select={filter.author}
            onSelect={(id) => onSelect("author", id)}
            indicator="작성자"
            list={userList}
          />,
        ]
      )}
    </Wrapper>
  );
};

export default FilterTabs;

const Wrapper = styled.div`
  display: flex;
  & > .Dropdown {
    margin-left: 32px;
  }
`;
