import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper.js";
import { AlertCircleIcon, ArchieveIcon } from "@icons";
import { SmallLinkText } from "@atoms";
import { ACTION_TYPE, COLOR, DATA_TYPE, ISSUE_PROP_TYPE } from "@constants";
import { IssueTableHeaderOptionTab } from "@/components/molecules/index.js";
import { useRecoilState, useRecoilValue, waitForAll } from "recoil";
import {
  closedIssueListCountState,
  filteredIssueListState,
  filterState,
  issueSelectionState,
  labelListState,
  milestoneListState,
  openedIssueListCountState,
  userListState,
} from "@stores";

const TAB_LIST_METADATA = [
  {
    title: "담당자",
    filterKey: ISSUE_PROP_TYPE.ASSIGNEE,
    dataKey: DATA_TYPE.USER,
  },
  {
    title: "레이블",
    filterKey: ISSUE_PROP_TYPE.LABEL,
    dataKey: DATA_TYPE.LABEL,
  },
  {
    title: "마일스톤",
    filterKey: ISSUE_PROP_TYPE.MILESTONE,
    dataKey: DATA_TYPE.MILESTONE,
  },
  {
    title: "작성자",
    filterKey: ISSUE_PROP_TYPE.WRITER,
    dataKey: DATA_TYPE.USER,
  },
];

const CHANGE_ISSUE_STATE_TAB_DATA = {
  title: "상태 수정",
  actionType: ACTION_TYPE.UPDATE_ISSUE,
  isCheckIcon: false,
  options: [
    {
      text: "선택한 이슈 열기",
      value: {
        key: ISSUE_PROP_TYPE.IS_OPENED,
        value: true,
      },
    },
    {
      text: "선택한 이슈 닫기",
      value: {
        key: ISSUE_PROP_TYPE.IS_OPENED,
        value: false,
      },
    },
  ],
};

const IssueTableHeaderWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  box-sizing: border-box;
`;

const IssueTableHeaderTabListWrapper = styled(Wrapper)`
  margin-left: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const FilterTabList = styled(Wrapper)`
  flex-direction: row;
`;

const FilterTab = styled(SmallLinkText)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 120px;
  height: 32px;
  margin: 0 10px;

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

function IssueTableHeader() {
  const [issueFilter, setIssueFilter] = useRecoilState(filterState);
  const openedIssueCount = useRecoilValue(openedIssueListCountState);
  const closedIssueCount = useRecoilValue(closedIssueListCountState);
  const [headerOptionTabData, setHeaderOptionTabData] = useState([]);
  const [userList, milestoneList, labelList] = useRecoilValue(
    waitForAll([userListState, milestoneListState, labelListState])
  );
  const [selectedIssueList, setSelectedIssueList] =
    useRecoilState(issueSelectionState);
  const filteredIssueList = useRecoilValue(filteredIssueListState);
  const checkboxRef = useRef();

  useEffect(() => {
    generateHeaderOptionTabData();
  }, [issueFilter]);

  useEffect(() => {
    checkboxRef.current.checked =
      selectedIssueList.length === filteredIssueList.length;
  }, [selectedIssueList]);

  const getDataWithDataKey = async (dataKey) => {
    switch (dataKey) {
      case DATA_TYPE.USER:
        return userList;
      case DATA_TYPE.LABEL:
        return labelList;
      case DATA_TYPE.MILESTONE:
        return milestoneList;
      default:
        return [];
    }
  };

  const processRawData = useCallback(
    (filterKey, rawData) => {
      return rawData.map((data) => {
        const { text: dataText, name: dataName, photoUrl } = data;
        const text = dataText || dataName;
        return {
          text,
          photoUrl: photoUrl,
          isChecked: issueFilter[filterKey] === text,
          value: {
            key: filterKey,
            value: text,
          },
        };
      });
    },
    [issueFilter]
  );

  const generateHeaderOptionTabData = () => {
    Promise.all(
      TAB_LIST_METADATA.map(async (meta) => {
        const { title, filterKey, dataKey } = meta;
        const rawData = await getDataWithDataKey(dataKey);
        const processedData = processRawData(filterKey, rawData);
        return {
          title,
          actionType: ACTION_TYPE.FILTER_ISSUE,
          isCheckIcon: true,
          options: processedData,
        };
      })
    ).then((result) => {
      setHeaderOptionTabData(result);
    });
  };

  const isOpenedIssueTabActivated = () => {
    return issueFilter.isOpened;
  };

  const isClosedIssueTabActivated = () => {
    return !issueFilter.isOpened;
  };

  const clickOpenedIssueTab = () => {
    setIssueFilter((prev) => {
      return { ...prev, isOpened: true };
    });
  };

  const clickClosedIssueTab = () => {
    setIssueFilter((prev) => {
      return { ...prev, isOpened: false };
    });
  };

  const changeCheckbox = (e) => {
    const { target } = e;
    if (target.checked) {
      const newSelectedIssueList = filteredIssueList.map((issue) => issue.id);
      setSelectedIssueList(newSelectedIssueList);
    } else {
      setSelectedIssueList([]);
    }
  };

  return (
    <IssueTableHeaderWrapper>
      <input type="checkbox" ref={checkboxRef} onChange={changeCheckbox} />
      <IssueTableHeaderTabListWrapper>
        {selectedIssueList.length > 0 ? (
          <>
            <FilterTabList>
              <FilterTab>
                <FilterTabText>
                  {selectedIssueList.length}개 이슈 선택
                </FilterTabText>
              </FilterTab>
            </FilterTabList>
            <OptionTabList>
              <IssueTableHeaderOptionTab
                key={`filterTab-${CHANGE_ISSUE_STATE_TAB_DATA.title}`}
                tabData={CHANGE_ISSUE_STATE_TAB_DATA}
              />
            </OptionTabList>
          </>
        ) : (
          <>
            <FilterTabList>
              <FilterTab
                isActivated={isOpenedIssueTabActivated()}
                onClick={clickOpenedIssueTab}
              >
                <AlertCircleIcon />
                <FilterTabText>
                  열린 이슈{<span>({openedIssueCount})</span>}
                </FilterTabText>
              </FilterTab>
              <FilterTab
                isActivated={isClosedIssueTabActivated()}
                onClick={clickClosedIssueTab}
              >
                <ArchieveIcon />
                <FilterTabText>
                  닫힌 이슈{<span>({closedIssueCount})</span>}
                </FilterTabText>
              </FilterTab>
            </FilterTabList>
            <OptionTabList>
              {headerOptionTabData.map((tabData, idx) => {
                return (
                  <IssueTableHeaderOptionTab
                    key={`filterTab-${tabData.title}-${idx}`}
                    tabData={tabData}
                  />
                );
              })}
            </OptionTabList>
          </>
        )}
      </IssueTableHeaderTabListWrapper>
    </IssueTableHeaderWrapper>
  );
}

export default IssueTableHeader;
