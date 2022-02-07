import React, { useState } from "react";
import styled, { css } from "styled-components";
import { SmallLink } from "@components/atoms/link";
import { SmallText } from "@components/atoms/Text";
import { DropdownPanel } from "@components/molecules/DropdownPanel";
import { SmallLabel } from "@components/molecules/Labels";
import { ProgressIndicator } from "@components/molecules/ProgressIndicators";

import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as UserImageLarge } from "@assets/icons/userimageLarge.svg";

const SidebarContainer = styled.div`
  width: 308px;
  height: fit-content;

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;

  background-color: ${(props) => props.theme.greyscale.offWhite};

  .wrapper + .wrapper {
    border-top: 1px solid ${(props) => props.theme.greyscale.line};
  }

  .wrapper:first-child {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .wrapper:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .clearfix:before,
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }
`;

const Wrapper = styled.div`
  width: 308px;
  position: relative;
  background: ${(props) => props.theme.greyscale.offWhite};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%:

  svg {
    cursor: pointer;
  }

  ${(props) => {
    if (props.value.length > 0) {
      return css`
        padding: 34px 32px 18px 32px;
      `;
    } else {
      return css`
        padding: 34px 32px;
      `;
    }
  }}
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
`;

const MilestoneWrapper = styled.div`
  padding: 0 32px;
  margin-top: 4px;

  progress {
    margin-top: 18px;
  }
`;

export function Sidebar() {
  const assigneeMenus = ["Lin", "Min"];
  const labelMenus = ["documentation", "review"];
  const milestoneMenus = ["Milestone 1", "Milestone 2"];

  const [selectedAssignee, setSelectedAssignee] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState([]);
  const [showPanel, setShowPanel] = useState({
    assignee: false,
    label: false,
    milestone: false,
  });

  function handlePanel(name) {
    setShowPanel({
      ...showPanel,
      [name]: !showPanel[name],
    });
  }

  function AssigneeList() {
    return selectedAssignee.map((assignee) => {
      return (
        <ListWrapper key={assignee}>
          <UserImageLarge /> <SmallText>{assignee}</SmallText>
        </ListWrapper>
      );
    });
  }

  function LabelList() {
    return selectedLabel.map((label) => {
      return (
        <ListWrapper key={label}>
          <SmallLabel type='light' text={label} />
        </ListWrapper>
      );
    });
  }

  function MilestoneList() {
    return selectedMilestone.map((milestone) => {
      return (
        <MilestoneWrapper key={milestone}>
          <ProgressIndicator openIssues={5} closedIssues={12} />
          <SmallText color='label'>{milestone}</SmallText>
        </MilestoneWrapper>
      );
    });
  }

  return (
    <SidebarContainer className='clearfix'>
      {/* 담당자 */}
      <Wrapper className='wrapper'>
        <Header value={selectedAssignee}>
          <SmallLink>담당자</SmallLink>
          <Plus onClick={() => handlePanel("assignee")} />
        </Header>
        <DropdownPanel
          show={showPanel["assignee"]}
          header='담당자 추가'
          type='image'
          menus={assigneeMenus}
          selected={selectedAssignee}
          setSelected={setSelectedAssignee}
        />
        {AssigneeList()}
      </Wrapper>
      {/* 레이블 */}
      <Wrapper className='wrapper'>
        <Header value={selectedLabel}>
          <SmallLink>레이블</SmallLink>
          <Plus onClick={() => handlePanel("label")} />
        </Header>
        <DropdownPanel
          show={showPanel["label"]}
          header='레이블 추가'
          type='image'
          menus={labelMenus}
          selected={selectedLabel}
          setSelected={setSelectedLabel}
        />
        {LabelList()}
      </Wrapper>
      {/* 마일스톤 */}
      <Wrapper className='wrapper'>
        <Header value={selectedMilestone}>
          <SmallLink>마일스톤</SmallLink>
          <Plus onClick={() => handlePanel("milestone")} />
        </Header>
        <DropdownPanel
          show={showPanel["milestone"]}
          header='마일스톤 추가'
          type='image'
          menus={milestoneMenus}
          selected={selectedMilestone}
          setSelected={setSelectedMilestone}
          top='38'
        />
        {MilestoneList()}
      </Wrapper>
    </SidebarContainer>
  );
}
