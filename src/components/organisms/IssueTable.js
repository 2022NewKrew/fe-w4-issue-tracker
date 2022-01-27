import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";
import { COLOR } from "@constants";

//FIX: DB 연동시 데이터 제거
const ISSUE_DATA = [
  {
    title: "PR날리기",
    label: ["시간이없어요"],
    id: "1519472103",
    writer: "aiden",
    timestamp: "9",
    milestone: "1주차",
  },
  {
    title: "강의듣기",
    label: ["documentation"],
    id: "871594351",
    writer: "dw",
    timestamp: "51",
    milestone: "2주차",
  },
];

const _Wrapper = styled(Wrapper)`
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

  return (
    <_Wrapper>
      <IssueTableHeader />
      <IssueList>
        {issueList.map((issue, idx) => {
          return <IssueCell key={`issue${idx}`} {...issue} />;
        })}
      </IssueList>
    </_Wrapper>
  );
}

export default IssueTable;
