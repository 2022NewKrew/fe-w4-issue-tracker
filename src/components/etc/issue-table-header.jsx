import styled from "styled-components";
import { useState } from "react";

import greyscale from "@styles/constants/greyscale";

const StyledIssueTableHeader = styled.div`
  position: static;
  width: 1280px;
  height: 128px;
  background: ${greyscale.BACKGROUND};
  border-radius: 16px 16px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1px 0px;
`;

const IssueTableHeader = ({ children, handleAllChecked }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = ({ target }) => {
    setChecked(!checked);
    handleAllChecked(target.checked);
  };

  return (
    <StyledIssueTableHeader>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={(e) => handleCheck(e)}
      ></input>
      <button>열린 이슈</button>
      <button>닫힌 이슈</button>
      <button>담당자</button>
      <button>레이블</button>
      <button>마일스톤</button>
      <button>작성자</button>
      <button>선택한 이슈 열기</button>
      <button>선택한 이슈 닫기</button>
      <span>{children}</span>
    </StyledIssueTableHeader>
  );
};

export default IssueTableHeader;
