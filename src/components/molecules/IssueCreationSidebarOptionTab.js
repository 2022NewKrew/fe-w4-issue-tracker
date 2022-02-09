import React, { useRef } from "react";
import styled from "styled-components";

import { PlusIcon } from "@icons";
import { BigProfileImg, SmallLinkText, SmallText, Wrapper } from "@atoms";
import { Dropdown, IssueLabel } from "@molecules";

import { ACTION_TYPE, COLOR } from "@constants";
import { Progressbar } from "@/components/atoms/Progressbar.js";

const SidebarContent = styled(Wrapper)`
  position: relative;
  width: 100%;

  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  margin: 1px;
  padding: 32px;
  box-sizing: border-box;
`;

const SidebarDropdown = styled(Dropdown)`
  position: absolute;
  top: 70px;
  right: 10px;
`;

const SidebarOptionButton = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
`;

const SelectedOptionListWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
`;

const SelectedOptionWrapper = styled(Wrapper)`
  width: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  padding-top: 20px;
`;

const SelectedAssigneeWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;

const SelectedMilestoneWrapper = styled(Wrapper)`
  width: 100%;
  align-items: flex-start;
`;

function IssueCreationSidebarOptionTab({
  actionForSelectOption,
  selectedList,
  actionType,
  ...tabData
}) {
  const buttonRef = useRef(null);

  const clickDropdownPanel = (actionType, value) => {
    actionForSelectOption[actionType](value);
  };

  const selectedListComponent = {
    [ACTION_TYPE.ADD_ASSIGNEE]: ({ name, photoUrl }) => (
      <SelectedAssigneeWrapper>
        <BigProfileImg src={photoUrl} />
        <SmallText
          css={`
            margin-left: 10px;
          `}
        >
          {name}
        </SmallText>
      </SelectedAssigneeWrapper>
    ),
    [ACTION_TYPE.ADD_LABEL]: (labelData) => <IssueLabel {...labelData} />,
    [ACTION_TYPE.ADD_MILESTONE]: ({ text, progress }) => (
      <SelectedMilestoneWrapper>
        <Progressbar width={"100%"} progress={progress} />
        <SmallText
          css={`
            margin-top: 10px;
          `}
        >
          {text}
        </SmallText>
      </SelectedMilestoneWrapper>
    ),
  };

  return (
    <SidebarContent>
      <SidebarOptionButton ref={buttonRef}>
        <SmallLinkText>{tabData.title}</SmallLinkText>
        <PlusIcon />
        <SidebarDropdown
          {...tabData}
          actionType={actionType}
          parentRef={buttonRef}
          callbackAfterPanelClickEvent={clickDropdownPanel}
        />
      </SidebarOptionButton>
      <SelectedOptionListWrapper>
        {Object.entries(selectedList).map(([key, data], idx) => {
          return (
            <SelectedOptionWrapper key={`selected-${idx}`}>
              {selectedListComponent[actionType](data)}
            </SelectedOptionWrapper>
          );
        })}
      </SelectedOptionListWrapper>
    </SidebarContent>
  );
}

export default IssueCreationSidebarOptionTab;
