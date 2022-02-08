import { Dropdown } from "@UI/Molecules";
import styled from "@emotion/styled";

import { useIssueStore, useModifyIssueStatusData } from "@stores/issue";
import { MouseEvent, useCallback } from "react";
import { useMilestoneList } from "@stores/milestone";
import { useUserList } from "@stores/user";
import { useLabelList } from "@stores/label";
import { arrayToggle } from "@utils/helper";
import { IssueStatus } from "@types";

const FilterTabs = () => {
  const { data: labelList } = useLabelList();
  const { data: milestoneList } = useMilestoneList();
  const { data: userList } = useUserList();

  const { mutate: modifyIssueStatus } = useModifyIssueStatusData();

  const { filter, setFilter, selectedIssue } = useIssueStore();

  const onSelect = (
    { target }: MouseEvent<HTMLElement>,
    type: "assignees" | "label" | "milestone" | "author"
  ) => {
    const li = (target as HTMLElement).closest("li");
    if (!li || !li.dataset.id) return;
    const selectedValue = li.dataset.id;
    if (type === "label") {
      setFilter((prev) => ({
        ...prev,
        label: arrayToggle(prev.label, selectedValue),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [type]: prev[type] === selectedValue ? null : selectedValue,
      }));
    }
  };

  const changeIssuesState = useCallback(
    async ({ target }: React.MouseEvent) => {
      const li = (target as HTMLElement).closest("li");
      if (!li || !li.dataset.id) return;
      const status = li.dataset.id as IssueStatus;
      await Promise.all(
        selectedIssue.map((issueId) => modifyIssueStatus({ issueId, status }))
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
            onSelect={(e) => onSelect(e, "assignees")}
            indicator="담당자"
            list={userList}
          />,
          <Dropdown
            key="label"
            select={filter.label}
            onSelect={(e) => onSelect(e, "label")}
            indicator="레이블"
            list={labelList}
          />,
          <Dropdown
            key="milestone"
            select={filter.milestone}
            onSelect={(e) => onSelect(e, "milestone")}
            indicator="마일스톤"
            list={milestoneList}
          />,
          <Dropdown
            key="author"
            select={filter.author}
            onSelect={(e) => onSelect(e, "author")}
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
