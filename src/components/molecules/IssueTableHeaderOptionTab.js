import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "@icons";
import { SmallLinkText, Wrapper } from "@atoms";
import { ACTION_TYPE, COLOR } from "@constants";
import Dropdown from "./Dropdown";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  filterState,
  forceIssueListUpdate,
  issueSelectionState,
} from "@stores";
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
  const issueListUpdate = useSetRecoilState(forceIssueListUpdate);
  const wrapper = useRef(null);

  const clickDropdownPanel = async (actionType, panelValue) => {
    const { key, value } = panelValue;
    let dataForUpdate;
    switch (actionType) {
      case ACTION_TYPE.FILTER_ISSUE:
        setIssueFilter((prev) => {
          return { ...prev, [key]: prev[key] === value ? "*" : value };
        });
        break;
      case ACTION_TYPE.UPDATE_ISSUE:
        dataForUpdate = selectedIssueList.map((id) => {
          return { id, key, value };
        });
        await updateIssue(dataForUpdate);
        issueListUpdate((n) => n + 1);
        setSelectedIssueList([]);
        break;
      default:
        throw new Error("actionType is not valuable");
    }
  };

  return (
    <OptionTabWrapper ref={wrapper}>
      <OptionTabButton>
        <OptionTabButtonText>{tabData.title}</OptionTabButtonText>
        <ChevronDownIcon />
      </OptionTabButton>
      <OptionTabDropDown
        {...tabData}
        parentRef={wrapper}
        callbackAfterPanelClickEvent={clickDropdownPanel}
      />
    </OptionTabWrapper>
  );
}

export default IssueTableHeaderOptionTab;
