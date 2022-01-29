import React, { useState } from "react";
import styled from "styled-components";

import { MediumTextButton } from "@components/atoms/buttons";
import { DropdownIndicators } from "@components/molecules/dropdownIndicators";
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

  div + div {
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
`;

export default function IssueTableHeader(props) {
  const [activeIssueType, setActiveIssueType] = useState("open");

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

  return (
    <HeaderContainer>
      <Wrapper>
        {checkbox()}
        <MediumTextButton
          type='open'
          onClick={(e) => clickIssueType(e)}
          active={activeIssueType === "open"}>
          <AlertCircle />
          열린 이슈(2)
        </MediumTextButton>
        <MediumTextButton
          type='closed'
          onClick={(e) => clickIssueType(e)}
          active={activeIssueType === "closed"}>
          <Archive />
          닫힌 이슈(2)
        </MediumTextButton>
      </Wrapper>

      <IndicatorsContainer>
        <DropdownIndicators text='담당자' />
        <DropdownIndicators text='레이블' />
        <DropdownIndicators text='마일스톤' />
        <DropdownIndicators text='작성자' />
      </IndicatorsContainer>
    </HeaderContainer>
  );
}
