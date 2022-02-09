import styled from "styled-components";
import { useState } from "react";

import greyscale from "@styles/constants/greyscale";

const StyledIssueTableHeader = styled.div`
  position: static;
  width: 1280px;
  height: 64px;
  background: ${greyscale.BACKGROUND};
  border-radius: 16px 16px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1px 0px;
`;

const IssueTableHeader = ({ children }) => {
  const [value, setValue] = useState(false);

  return (
    <StyledIssueTableHeader>
      <input
        type={"checkbox"}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <span>{children}</span>
    </StyledIssueTableHeader>
  );
};

export default IssueTableHeader;
