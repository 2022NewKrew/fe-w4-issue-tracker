import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "@/components/atoms/Wrapper.js";
import { AlertCircleIcon, ArchieveIcon } from "@icons";
import { SmallLinkText } from "@atoms";
import { COLOR, DATA_TYPE } from "@constants";
import { IssueTableHeaderOptionTab } from "@/components/molecules/index.js";
import { useRecoilState } from "recoil";
import { filterState } from "@/store.js";
import {
  getClosedIssueCount,
  getLabelList,
  getMilestoneList,
  getOpenedIssueCount,
  getUserList,
} from "@/firebase.js";

const TAB_LIST_METADATA = [
  { title: "담당자", filterKey: "assignee", dataKey: DATA_TYPE.USER },
  { title: "레이블", filterKey: "label", dataKey: DATA_TYPE.LABEL },
  { title: "마일스톤", filterKey: "milestone", dataKey: DATA_TYPE.MILESTONE },
  { title: "작성자", filterKey: "writer", dataKey: DATA_TYPE.USER },
];

const IssueTableHeaderWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
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
  const [openedIssueCount, setOpenedIssueCount] = useState(null);
  const [closedIssueCount, setClosedIssueCount] = useState(null);
  const [headerOptionTabData, setHeaderOptionTabData] = useState([]);

  useEffect(async () => {
    setOpenedIssueCount(await getOpenedIssueCount());
    setClosedIssueCount(await getClosedIssueCount());
  });

  useEffect(() => {
    generateHeaderOptionTabData();
  }, [issueFilter]);

  const getDataWithDataKey = async (dataKey) => {
    switch (dataKey) {
      case DATA_TYPE.USER:
        return await getUserList();
      case DATA_TYPE.LABEL:
        return await getLabelList();
      case DATA_TYPE.MILESTONE:
        return await getMilestoneList();
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
  return (
    <IssueTableHeaderWrapper>
      <FilterTabList>
        <input type="checkbox" />
        <FilterTab
          isActivated={isOpenedIssueTabActivated()}
          onClick={clickOpenedIssueTab}
        >
          <AlertCircleIcon />
          <FilterTabText>
            열린 이슈{openedIssueCount ? <span>({openedIssueCount})</span> : ""}
          </FilterTabText>
        </FilterTab>
        <FilterTab
          isActivated={isClosedIssueTabActivated()}
          onClick={clickClosedIssueTab}
        >
          <ArchieveIcon />
          <FilterTabText>
            닫힌 이슈{closedIssueCount ? <span>({closedIssueCount})</span> : ""}
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
    </IssueTableHeaderWrapper>
  );
}

export default IssueTableHeader;
