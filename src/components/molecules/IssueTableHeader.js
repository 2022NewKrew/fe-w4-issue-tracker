import React from "react";
import styled from "styled-components";
import styled, { css } from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper.js";
import { AlertCircleIcon, ArchieveIcon, ChevronDownIcon } from "@icons";
import { SmallLinkText } from "@atoms";
import { COLOR } from "@constants";

const IssueTableHeaderWrapper = styled(Wrapper)`
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
const FilterTab = styled(SmallLinkText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 105px;
  height: 32px;

  &:hover {
    color: ${COLOR.GREYSCALE.BODY};
  }
  ${({ activated }) =>
    activated
      ? css`
          color: ${COLOR.GREYSCALE.BODY};
        `
      : css`
          color: ${COLOR.GREYSCALE.LABEL};
        `}
`;
const FilterTabText = styled(SmallLinkText)`

const FilterTabText = styled.span`
  margin-left: 10px;
`;

const OptionTabList = styled(Wrapper)`
  flex-direction: row;
`;

const OptionTab = styled(Wrapper)`
const OptionTab = styled(SmallLinkText)`
  flex-direction: row;
  margin: 0 20px;
  color: ${COLOR.GREYSCALE.LABEL};
  &:hover {
    color: ${COLOR.GREYSCALE.BODY};
  }
`;

const OptionTabText = styled(SmallLinkText)`
const OptionTabText = styled.span`
  margin-right: 10px;
`;

function IssueTableHeader() {
function IssueTableHeader({
  setIssueFilter,
  issueFilter,
}) {
  const { key: filterKey, value: filterValue } = issueFilter;

  const isOpenedIssueTabActivated = () => {
    return filterKey === "isOpened" && filterValue;
  };

  const isClosedIssueTabActivated = () => {
    return filterKey === "isOpened" && !filterValue;
  };

  const clickOpenedIssueTab = () => {
    setIssueFilter({
      key: "isOpened",
      value: true,
    });
  };

  const clickClosedIssueTab = () => {
    setIssueFilter({
      key: "isOpened",
      value: false,
    });
  };

  return (
    <IssueTableHeaderWrapper>
      <FilterTabList>
        <input type="checkbox" />
        <FilterTab>
        <input
          type="checkbox"
        />
        <FilterTab
          activated={isOpenedIssueTabActivated()}
          onClick={clickOpenedIssueTab}
        >
          <AlertCircleIcon />
          <FilterTabText>열린 이슈</FilterTabText>
        </FilterTab>
        <FilterTab>
        <FilterTab
          activated={isClosedIssueTabActivated()}
          onClick={clickClosedIssueTab}
        >
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
    </IssueTableHeaderWrapper>
  );
}

export default IssueTableHeader;
