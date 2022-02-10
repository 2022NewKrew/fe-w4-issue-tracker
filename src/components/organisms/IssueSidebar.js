import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, waitForAll } from "recoil";

import { Wrapper } from "@atoms";
import { IssueSidebarOptionTab } from "@molecules";

import { labelListState, milestoneListState, userListState } from "@stores";
import { ACTION_TYPE, COLOR, ISSUE_PROP_TYPE } from "@constants";

const Sidebar = styled(Wrapper)`
  position: relative;
  width: 350px;
  background-color: ${COLOR.GREYSCALE.LINE};
  box-sizing: border-box;
`;

function IssueSidebar({ setOptionValues }) {
  const [userList, milestoneList, labelList] = useRecoilValue(
    waitForAll([userListState, milestoneListState, labelListState])
  );

  const [selectedAssignee, setSelectedAssignee] = useState({});
  const [selectedLabel, setSelectedLabel] = useState({});
  const [selectedMilestone, setSelectedMilestone] = useState({});

  useEffect(() => {
    setOptionValues({
      [ISSUE_PROP_TYPE.LABEL]: Object.keys(selectedLabel) || [],
      [ISSUE_PROP_TYPE.ASSIGNEE]: Object.keys(selectedAssignee) || [],
      [ISSUE_PROP_TYPE.MILESTONE]: Object.keys(selectedMilestone)[0] || "",
    });
  }, [selectedLabel, selectedMilestone, selectedAssignee]);

  const dropdownData = [
    {
      title: "담당자",
      actionType: ACTION_TYPE.ADD_ASSIGNEE,
      selectedOptions: selectedAssignee,
      isCheckIcon: true,
      options: userList.map(({ id, name, photoUrl }) => {
        return {
          text: name,
          photoUrl,
          isChecked: selectedAssignee[id],
          value: {
            id,
            name,
            photoUrl,
          },
        };
      }),
    },
    {
      title: "레이블",
      isCheckIcon: true,
      selectedOptions: selectedLabel,
      actionType: ACTION_TYPE.ADD_LABEL,
      options: labelList.map(({ id, text, color, backgroundColor }) => {
        return {
          text,
          isChecked: selectedLabel[id],
          value: {
            id,
            text,
            color,
            backgroundColor,
          },
        };
      }),
    },
    {
      title: "마일스톤",
      actionType: ACTION_TYPE.ADD_MILESTONE,
      selectedOptions: selectedMilestone,
      isCheckIcon: true,
      options: milestoneList.map(({ id, text, progress }) => {
        return {
          text,
          isChecked: selectedMilestone[id],
          value: {
            id,
            text,
            progress,
          },
        };
      }),
    },
  ];

  const actionForSelectOption = {
    [ACTION_TYPE.ADD_ASSIGNEE]: ({ id, ...value }) => {
      setSelectedAssignee((prev) => {
        const { [id]: isIdAlreadyExist, ...restSelectedAssignee } = prev;
        return isIdAlreadyExist
          ? restSelectedAssignee
          : { ...restSelectedAssignee, [id]: value };
      });
    },
    [ACTION_TYPE.ADD_LABEL]: ({ id, ...value }) => {
      setSelectedLabel((prev) => {
        const { [id]: isIdAlreadyExist, ...restSelectedLabel } = prev;
        return isIdAlreadyExist
          ? restSelectedLabel
          : { ...restSelectedLabel, [id]: value };
      });
    },
    [ACTION_TYPE.ADD_MILESTONE]: ({ id, ...value }) => {
      setSelectedMilestone({ [id]: value });
    },
  };

  const selectedList = {
    [ACTION_TYPE.ADD_ASSIGNEE]: selectedAssignee,
    [ACTION_TYPE.ADD_LABEL]: selectedLabel,
    [ACTION_TYPE.ADD_MILESTONE]: selectedMilestone,
  };

  return (
    <Sidebar>
      {dropdownData.map((data, idx) => (
        <IssueSidebarOptionTab
          {...data}
          key={`issue-creation-sidebar-${idx}`}
          actionForSelectOption={actionForSelectOption}
          selectedList={selectedList[data.actionType]}
          name={data.actionType}
          value={selectedList[data.actionType]}
        />
      ))}
    </Sidebar>
  );
}

export default IssueSidebar;
