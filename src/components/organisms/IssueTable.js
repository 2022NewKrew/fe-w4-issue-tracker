import React from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";
import { COLOR } from "@constants";
import { useRecoilValue } from "recoil";
import { issueListState } from "@/store.js";

const IssueTableWrapper = styled(Wrapper)`
  width: 100%;
  margin-top: 20px;
  border-radius: 16px;
  border: 1px solid ${COLOR.GREYSCALE.LINE};
`;

const IssueList = styled(Wrapper)`
  background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  width: 100%;
`;

function IssueTable() {
  const issueList = useRecoilValue(issueListState);

  return (
    <IssueTableWrapper>
      <IssueTableHeader />
      <IssueList>
        {issueList.length ? (
          issueList.map((issueData) => (
            <IssueCell key={issueData.id} {...issueData} />
          ))
        ) : (
          <div> 필터에 맞는 이슈가 없습니다.</div>
        )}
      </IssueList>
    </IssueTableWrapper>
  );
}

export default IssueTable;
