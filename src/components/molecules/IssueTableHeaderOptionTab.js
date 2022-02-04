import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "@icons";
import { SmallLinkText, Wrapper } from "@atoms";
import { COLOR } from "@constants";
import Dropdown from "./Dropdown";

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
  const wrapper = useRef(null);
  return (
    <OptionTabWrapper ref={wrapper}>
      <OptionTabButton>
        <OptionTabButtonText>{tabData.title}</OptionTabButtonText>
        <ChevronDownIcon />
      </OptionTabButton>
      <OptionTabDropDown {...tabData} parentRef={wrapper} />
    </OptionTabWrapper>
  );
}

export default IssueTableHeaderOptionTab;
