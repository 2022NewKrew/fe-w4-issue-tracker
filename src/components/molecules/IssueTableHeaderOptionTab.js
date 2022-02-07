import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "@icons";
import { SmallLinkText, Wrapper } from "@atoms";
import { COLOR } from "@constants";
import Dropdown from "./Dropdown";
import { useRecoilState } from "recoil";
import { filterState } from "@/store.js";

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
  const [issueFilter, setIssueFilter] = useRecoilState(filterState);
  const wrapper = useRef(null);

  const clickDropdownPanel = useCallback(
    (filter) => {
      const { key, value } = filter;
      const newIssueFilter =
        issueFilter[key] === value
          ? { ...issueFilter, [key]: "*" }
          : { ...issueFilter, [key]: value };
      setIssueFilter(newIssueFilter);
    },
    [issueFilter]
  );

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
