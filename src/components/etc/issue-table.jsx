import styled from "styled-components";
import { useState } from "react";

import greyscale from "@styles/constants/greyscale";

const StyledIssueTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 1280px;
  height: 1700px;
  left: 80px;
  top: 190px;
  background: ${greyscale.LINE};
  border: 1px solid ${greyscale.LINE};
  border-radius: 16px;
`;

const IssueTable = ({ children }) => {
  return (
    <StyledIssueTable>
      <div>{children}</div>
    </StyledIssueTable>
  );
};

export default IssueTable;
