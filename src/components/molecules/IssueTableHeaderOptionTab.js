import React, { useRef } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";

import { ChevronDownIcon } from "@icons";
import { SmallLinkText, Wrapper } from "@atoms";
import { Dropdown } from "@molecules";

import { useRefreshRecoilState } from "@hooks";

import { ACTION_TYPE, COLOR } from "@constants";
import { filterState, issueListState, issueSelectionState } from "@stores";

import { updateIssue } from "@/firebase.js";

const OptionTabWrapper = styled(Wrapper)`
  position: relative;
`;

const OptionTabButton = styled(SmallLinkText)`
  position: relative;
  flex-direction: row;
  margin: 0 20px;
  color: ${COLOR.GREYSCALE.LABEL};
  &:hover {
    color: ${COLOR.GREYSCALE.BODY};
  }
`;

const OptionTabButtonText = styled.span`
  margin-right: 10px;
`;

const OptionTabDropDown = styled(Dropdown)`
  position: absolute;
  top: 30px;
  right: 0;
`;

function IssueTableHeaderOptionTab({ tabData }) {
  const setIssueFilter = useSetRecoilState(filterState);
  const [selectedIssueList, setSelectedIssueList] =
    useRecoilState(issueSelectionState);

  const { refreshIssueList } = useRefreshRecoilState(issueListState);

  const wrapperRef = useRef(null);

  const panelClickAction = {
    [ACTION_TYPE.FILTER_ISSUE]: (key, value) => {
      setIssueFilter((prev) => {
        return { ...prev, [key]: prev[key] === value ? "*" : value };
      });
    },
    [ACTION_TYPE.UPDATE_ISSUE]: async (key, value) => {
      const dataForUpdate = selectedIssueList.map((id) => {
        return { id, key, value };
      });
      await updateIssue(dataForUpdate);
      refreshIssueList();
      setSelectedIssueList([]);
    },
  };

  const clickDropdownPanel = async (actionType, { key, value }) => {
    panelClickAction[actionType](key, value);
  };

  return (
    <OptionTabWrapper ref={wrapperRef}>
      <OptionTabButton>
        <OptionTabButtonText>{tabData.title}</OptionTabButtonText>
        <ChevronDownIcon />
      </OptionTabButton>
      <OptionTabDropDown
        {...tabData}
        parentRef={wrapperRef}
        callbackAfterPanelClickEvent={clickDropdownPanel}
      />
    </OptionTabWrapper>
  );
}

export default IssueTableHeaderOptionTab;
