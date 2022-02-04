import React from "react";
import styled from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper.js";
import { AlertCircleIcon, ArchieveIcon } from "@icons";
import { SmallLinkText } from "@atoms";
import { COLOR } from "@constants";
import { IssueTableHeaderOptionTab } from "@/components/molecules/index.js";

const TEMP_PROFILE_IMG_URL =
  "https://avatars.githubusercontent.com/u/62870938?v=4";

// FIX: DB 연동시
const tabDataList = [
  {
    title: "담당자",
    isMultiCheckAvailable: false,
    isCheckIcon: true,
    options: [
      {
        text: "aiden",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
      {
        text: "dw",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
      {
        text: "hollys",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
    ],
  },
  {
    title: "레이블",
    isMultiCheckAvailable: false,
    isCheckIcon: true,
    options: [
      {
        text: "아무 라벨",
        isChecked: false,
      },
      {
        text: "documentation",
        isChecked: false,
      },
      {
        text: "시간이 없어요",
        isChecked: false,
      },
    ],
  },
  {
    title: "마일스톤",
    isMultiCheckAvailable: false,
    isCheckIcon: true,
    options: [
      {
        text: "1주차",
        isChecked: false,
      },
      {
        text: "2주차",
        isChecked: false,
      },
      {
        text: "4주차",
        isChecked: false,
      },
    ],
  },
  {
    title: "작성자",
    isMultiCheckAvailable: false,
    isCheckIcon: true,
    options: [
      {
        text: "aiden",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
      {
        text: "dw",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
      {
        text: "hollys",
        imgUrl: TEMP_PROFILE_IMG_URL,
        isChecked: false,
      },
    ],
  },
];

const IssueTableHeaderWrapper = styled(Wrapper)`
  position: relative;
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

const FilterTab = styled(SmallLinkText)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 105px;
  height: 32px;

  &:hover {
    color: ${COLOR.GREYSCALE.BODY};
  }

  color: ${({ isActivated }) =>
    isActivated ? COLOR.GREYSCALE.BODY : COLOR.GREYSCALE.LABEL};
`;

const FilterTabText = styled.span`
  margin-left: 10px;
`;

const OptionTabList = styled(Wrapper)`
  flex-direction: row;
`;

function IssueTableHeader({ setIssueFilter, issueFilter }) {
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
        <FilterTab
          isActivated={isOpenedIssueTabActivated()}
          onClick={clickOpenedIssueTab}
        >
          <AlertCircleIcon />
          <FilterTabText>열린 이슈</FilterTabText>
        </FilterTab>
        <FilterTab
          isActivated={isClosedIssueTabActivated()}
          onClick={clickClosedIssueTab}
        >
          <ArchieveIcon />
          <FilterTabText>닫힌 이슈</FilterTabText>
        </FilterTab>
      </FilterTabList>
      <OptionTabList>
        {tabDataList.map((tabData, idx) => {
          return (
            <IssueTableHeaderOptionTab
              key={`filterTab-${tabData.title}-${idx}`}
              tabData={tabData}
            />
          );
        })}
      </OptionTabList>
    </IssueTableHeaderWrapper>
  );
}

export default IssueTableHeader;
