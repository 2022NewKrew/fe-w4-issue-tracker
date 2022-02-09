import React, { useState } from "react";
import styled from "styled-components";

import { MediumTextButton } from "@components/atoms/buttons";
import { SmallLink } from "@components/atoms/link";
import { DropdownIndicators } from "@components/molecules/dropdownIndicators";
import { DropdownPanel } from "@components/molecules/DropdownPanel";
import { ReactComponent as AlertCircle } from "@assets/icons/alertCircle.svg";
import { ReactComponent as Archive } from "@assets/icons/archive.svg";
import { ReactComponent as CheckboxInitial } from "@assets/icons/checkboxInitial.svg";
import { ReactComponent as CheckboxActive } from "@assets/icons/checkboxActive.svg";

import {
  openIssuesState,
  closedIssuesState,
  activeIssueTabState,
  assigneesList,
  labelList,
  milestoneList,
  writerList,
} from "../../_state";
import { useRecoilValue, useRecoilState } from "recoil";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%:
  height: 64px;
  padding: 0 30px;

  background-color: ${(props) => props.theme.greyscale.background};

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  button {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7.33px;
    }
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  align-items: center;

  ${IndicatorsContainer} > div + div {
    margin-left: 36px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  svg:first-child {
    cursor: pointer;
  }

  svg + button {
    margin-left: 32px;
  }

  button + button {
    margin-left: 24px;
  }

  svg + p {
    margin-left: 32px;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  position: relative;
`;

export default function IssueTableHeader(props) {
  const [activeIssueTab, setActiveIssueTab] =
    useRecoilState(activeIssueTabState);

  const [showPanel, setShowPanel] = useState({
    statusModify: false,
    assignee: false,
    label: false,
    milestone: false,
    writer: false,
    status: false,
  });

  function clickIssueType(e) {
    setActiveIssueTab(e.target.attributes.type.value);
  }

  function handleCheckboxClick(status) {
    if (status === "active") {
      props.setSelectedIssueIds([]);
    } else if (status === "initial") {
      const issueIds = [];
      props.issues.forEach((issue) => {
        issueIds.push(issue.id);
      });
      props.setSelectedIssueIds(issueIds);
    }
  }

  function checkbox() {
    if (props.selectedIssueIds.length >= 1) {
      return <CheckboxActive onClick={() => handleCheckboxClick("active")} />;
    } else {
      return <CheckboxInitial onClick={() => handleCheckboxClick("initial")} />;
    }
  }

  function showDropdownIndicators() {
    const openIssues = useRecoilValue(openIssuesState);
    const closedIssues = useRecoilValue(closedIssuesState);

    const asssignneeChangeMenus = useRecoilValue(assigneesList);
    const labelChangeMenus = useRecoilValue(labelList);
    const milestoneChangeMenus = useRecoilValue(milestoneList);
    const writerChangeMenus = useRecoilValue(writerList);
    const statusChangeMenus = ["이슈 열기", "이슈 닫기"];

    const [selectedAssignee, setSelectedAssignee] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState([]);
    const [selectedMilestone, setSelectedMilestone] = useState([]);
    const [selectedWriter, setSelectedWriter] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("");

    if (props.selectedIssueIds.length < 1) {
      return (
        <>
          <DropdownContainer>
            <DropdownIndicators
              setShowPanel={setShowPanel}
              showPanel={showPanel}
              name='assignee'
              text='담당자'
            />
            <DropdownPanel
              show={showPanel["assignee"]}
              header='담당자 필터'
              type='image'
              menus={asssignneeChangeMenus}
              position='right'
              selected={selectedAssignee}
              setSelected={setSelectedAssignee}
            />
          </DropdownContainer>
          <DropdownContainer>
            <DropdownIndicators
              setShowPanel={setShowPanel}
              showPanel={showPanel}
              name='label'
              text='레이블'
            />
            <DropdownPanel
              show={showPanel["label"]}
              header='레이블 필터'
              type='image'
              menus={labelChangeMenus}
              position='right'
              selected={selectedLabel}
              setSelected={setSelectedLabel}
            />
          </DropdownContainer>
          <DropdownContainer>
            <DropdownIndicators
              setShowPanel={setShowPanel}
              showPanel={showPanel}
              name='milestone'
              text='마일스톤'
            />
            <DropdownPanel
              show={showPanel["milestone"]}
              header='마일스톤 필터'
              type='image'
              menus={milestoneChangeMenus}
              position='right'
              selected={selectedMilestone}
              setSelected={setSelectedMilestone}
            />
          </DropdownContainer>
          <DropdownContainer>
            <DropdownIndicators
              setShowPanel={setShowPanel}
              showPanel={showPanel}
              name='writer'
              text='작성자'
            />
            <DropdownPanel
              show={showPanel["writer"]}
              header='작성자 필터'
              type='image'
              menus={writerChangeMenus}
              position='right'
              selected={selectedWriter}
              setSelected={setSelectedWriter}
            />
          </DropdownContainer>
        </>
      );
    } else {
      return (
        <DropdownContainer>
          <DropdownIndicators
            setShowPanel={setShowPanel}
            showPanel={showPanel}
            name='status'
            type='statusModify'
            text='상태 수정'
          />
          <DropdownPanel
            show={showPanel["status"]}
            showPanel={showPanel}
            setShowPanel={setShowPanel}
            name='status'
            header='상태 변경'
            type='modify'
            menus={statusChangeMenus}
            position='right'
            selected={selectedStatus}
            setSelected={setSelectedStatus}
          />
        </DropdownContainer>
      );
    }
  }

  function showButtonsOrIssueCounts() {
    const selectedIssuesCount = props.selectedIssueIds.length;
    const issuesCount = props.issues && props.issues.length;

    const openIssues = useRecoilValue(openIssuesState);
    const closedIssues = useRecoilValue(closedIssuesState);

    if (selectedIssuesCount < 1) {
      return (
        <>
          <MediumTextButton
            type='open'
            onClick={(e) => clickIssueType(e)}
            active={activeIssueTab === "open"}>
            <AlertCircle />
            열린 이슈({(openIssues && openIssues.length) || 0})
          </MediumTextButton>
          <MediumTextButton
            type='closed'
            onClick={(e) => clickIssueType(e)}
            active={activeIssueTab === "closed"}>
            <Archive />
            닫힌 이슈({(closedIssues && closedIssues.length) || 0})
          </MediumTextButton>
        </>
      );
    } else {
      return (
        <SmallLink color='label'>{selectedIssuesCount}개 이슈 선택</SmallLink>
      );
    }
  }

  return (
    <HeaderContainer>
      <Wrapper>
        {checkbox()}
        {showButtonsOrIssueCounts()}
      </Wrapper>
      <IndicatorsContainer>{showDropdownIndicators()}</IndicatorsContainer>
    </HeaderContainer>
  );
}
