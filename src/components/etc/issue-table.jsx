import styled from "styled-components";
import { useState } from "react";

import IssueTableHeader from "@components/etc/issue-table-header";
import IssueTableCell from "@components/etc/Issue-table-cell";
import greyscale from "@styles/constants/greyscale";

const StyledIssueTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 1280px;
  height: 2000px;
  left: 80px;
  top: 190px;
  background: ${greyscale.LINE};
  border: 1px solid ${greyscale.LINE};
  border-radius: 16px;
`;

// reference : https://egg-programmer.tistory.com/282
const IssueTable = ({ children }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedIssues, setCheckedIssues] = useState(new Set());

  const issueKeys = [...Array(10).keys()];

  const handleAllChecked = ({ checked }) => {
    if (checked) {
      setCheckedIssues(new Set(issueKeys.map(({ key }) => key)));
      setAllChecked(true);
    } else {
      checkedIssues.clear();
      setCheckedIssues(setCheckedIssues);
      setAllChecked(false);
    }
  };

  const handleCheckedIssue = ({ key, checked }) => {
    if (checked) {
      checkedIssues.add(key);
      setCheckedIssues(checkedIssues);
    } else if (!checked && checkedIssues.has(key)) {
      checkedIssues.delete(key);
      setCheckedIssues(checkedIssues);
    }
  };

  return (
    <StyledIssueTable>
      <IssueTableHeader handleAllChecked={handleAllChecked}></IssueTableHeader>
      <div>
        {issueKeys.map((issue, index) => (
          <IssueTableCell
            key={index.toString()}
            allChecked={allChecked}
            handleCheckedIssue={handleCheckedIssue}
            initialOpened={Boolean(index % 2)}
            initialTitle={"FE 이슈트래커 개발"}
            initialLabel={"documentation"}
            initialNumber={index + 1}
            initialWriter={"Oni"}
            initialTimestamp={"8분 전"}
            initialMilestone={"마스터즈 코스"}
          ></IssueTableCell>
        ))}
      </div>
      <div>{children}</div>
    </StyledIssueTable>
  );
};

export default IssueTable;
