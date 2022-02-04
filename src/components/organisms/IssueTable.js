import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";
import { IssueCell, IssueTableHeader } from "@molecules";
import { COLOR } from "@constants";
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
  const [issueList, setIssueList] = useState([]);
  const [issueFilter, setIssueFilter] = useState([
    {
      key: "isOpened",
      value: true,
    },
  ]);

  useEffect(async () => {
    const newIssueList = await getFilteredIssueList(issueFilter);
    setIssueList(newIssueList);
  }, []);

  return (
    <IssueTableWrapper>
      <IssueTableHeader
        issueFilter={issueFilter}
        setIssueFilter={setIssueFilter}
      />
      <IssueList>
        {issueList.map((issueData) => (
          <IssueCell
            key={issueData.id}
            {...issueData}
          />
        ))}
      </IssueList>
    </IssueTableWrapper>
  );
}

export default IssueTable;
