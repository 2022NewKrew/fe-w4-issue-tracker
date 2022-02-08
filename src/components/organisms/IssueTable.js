import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";
import { COLOR } from "@constants";
import { useRecoilValue } from "recoil";
import { filteredIssueListState } from "@stores";

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
  const filteredIssueList = useRecoilValue(filteredIssueListState);

  return (
    <IssueTableWrapper>
      <IssueTableHeader />
      <IssueList>
        {filteredIssueList.length ? (
          filteredIssueList.map((issueData) => (
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
