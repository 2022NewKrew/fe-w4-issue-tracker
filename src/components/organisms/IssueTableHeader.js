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
  const [activeIssueType, setActiveIssueType] = useState("open");
  const [showPanel, setShowPanel] = useState({
    statusModify: false,
    assignee: false,
    label: false,
    milestone: false,
    writer: false,
  });

  const statusChangeMenus = ["선택한 이슈 열기", "선택한 이슈 닫기"];
  const asssignneeChangeMenus = ["담당자가 없는 이슈", "Lin", "Genie"];
  const labelChangeMenus = ["레이블이 없는 이슈", "documentation", "bug"];
  const milestoneChangeMenus = [
    "마일스톤이 없는 필터",
    "마스터즈 코스",
    "비기너 코스",
  ];
  const writerChangeMenus = ["Lin", "Min", "Genie"];

  function clickIssueType(e) {
    setActiveIssueType(e.target.attributes.type.value);
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

  // Dropdown panels

  function showDropdownIndicators() {
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
            type='statusModify'
            text='상태 수정'
          />
          <DropdownPanel
            show={showPanel}
            header='상태 변경'
            type='modify'
            menus={statusChangeMenus}
            position='right'
          />
        </DropdownContainer>
      );
    }
  }

  function showButtonsOrIssueCounts() {
    const selectedIssuesCount = props.selectedIssueIds.length;
    const issuesCount = props.issues.length;
    if (selectedIssuesCount < 1) {
      return (
        <>
          <MediumTextButton
            type='open'
            onClick={(e) => clickIssueType(e)}
            active={activeIssueType === "open"}>
            <AlertCircle />
            열린 이슈({issuesCount})
          </MediumTextButton>
          <MediumTextButton
            type='closed'
            onClick={(e) => clickIssueType(e)}
            active={activeIssueType === "closed"}>
            <Archive />
            닫힌 이슈(2)
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
