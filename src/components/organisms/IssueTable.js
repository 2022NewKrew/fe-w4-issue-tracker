import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";
import { COLOR } from "@constants";

//FIX: DB 연동시 데이터 제거
const ISSUE_DATA = [
  {
    title: "PR날리기",
    labelList: ["시간이없어요"],
    id: "1519472103",
    writer: "aiden",
    timestamp: "9",
    milestone: "1주차",
    isOpened: true,
  },
  {
    title: "재택근무",
    labelList: ["아무라벨", "documentation"],
    id: "2131512",
    writer: "hollys",
    timestamp: "22",
    milestone: "4주차",
    isOpened: false,
  },
  {
    title: "강의듣기",
    labelList: ["documentation"],
    id: "871594351",
    writer: "dw",
    timestamp: "51",
    milestone: "2주차",
    isOpened: true,
  },
];

const IssueTableWrapper = styled(Wrapper)`
  width: 100%;
  border-radius: 16px;
  border: 1px solid ${COLOR.GREYSCALE.LINE};
  margin-top: 20px;
  overflow: hidden;
`;

const IssueList = styled(Wrapper)`
  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  width: 100%;
`;

function IssueTable() {
  const [issueList, setIssueList] = useState(ISSUE_DATA);
  const [issueFilter, setIssueFilter] = useState({
    key: "isOpened",
    value: true,
  });

  return (
    <IssueTableWrapper>
      <IssueTableHeader
        issueFilter={issueFilter}
        setIssueFilter={setIssueFilter}
      />
      <IssueList>
        {issueList.map((issueData, idx) => {
          if (issueData[issueFilter.key] === issueFilter.value) {
            return (
              <IssueCell
                key={`issue${idx}`}
                // isAllIssueSelected={isAllIssueSelected}
                // increaseIssueCount={increaseIssueCount}
                // decreaseIssueCount={decreaseIssueCount}
                {...issueData}
              />
            );
          } else {
            return null;
          }
        })}
      </IssueList>
    </IssueTableWrapper>
  );
}

export default IssueTable;
