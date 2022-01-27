import React from "react";
import styled from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper.js";
import { AlertCircleIcon, ArchieveIcon, ChevronDownIcon } from "@icons";
import { SmallLinkText } from "@atoms";
import { COLOR } from "@constants";

const _Wrapper = styled(Wrapper)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${COLOR.GREYSCALE.BACKGROUND};
`;

const FilterTabList = styled(Wrapper)`
  flex-direction: row;
`;

const FilterTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 32px;
`;
const FilterTabText = styled(SmallLinkText)`
  margin-left: 10px;
`;

const OptionTabList = styled(Wrapper)`
  flex-direction: row;
`;

const OptionTab = styled(Wrapper)`
  flex-direction: row;
  margin: 0 20px;
`;

const OptionTabText = styled(SmallLinkText)`
  margin-right: 10px;
`;

function IssueTableHeader() {
  return (
    <_Wrapper>
      <FilterTabList>
        <input type="checkbox" />
        <FilterTab>
          <AlertCircleIcon />
          <FilterTabText>열린 이슈</FilterTabText>
        </FilterTab>
        <FilterTab>
          <ArchieveIcon />
          <FilterTabText>닫힌 이슈</FilterTabText>
        </FilterTab>
      </FilterTabList>
      <OptionTabList>
        <OptionTab>
          <OptionTabText>담당자</OptionTabText>
          <ChevronDownIcon />
        </OptionTab>
        <OptionTab>
          <OptionTabText>레이블</OptionTabText>
          <ChevronDownIcon />
        </OptionTab>
        <OptionTab>
          <OptionTabText>마일스톤</OptionTabText>
          <ChevronDownIcon />
        </OptionTab>
        <OptionTab>
          <OptionTabText>작성자</OptionTabText>
          <ChevronDownIcon />
        </OptionTab>
      </OptionTabList>
    </_Wrapper>
  );
}

export default IssueTableHeader;
