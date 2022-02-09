import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";

import { COLOR } from "@constants";
import { filteredIssueListState, issueListState } from "@stores";
import { useRefreshRecoilState } from "@hooks";

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
  const { refreshIssueList } = useRefreshRecoilState(issueListState);
  const filteredIssueList = useRecoilValue(filteredIssueListState);

  useEffect(() => {
    refreshIssueList();
  }, []);
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
