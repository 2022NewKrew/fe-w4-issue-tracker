import styled from "styled-components";
import { useState } from "react";

import greyscale from "@styles/constants/greyscale";

const StyledIssueTableCell = styled.div`
  position: static;
  width: 1280px;
  height: 160px;
  background: ${greyscale.OFF_WHITE};
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 1px 0px;
`;

const IssueTableCell = ({
  children,
  initialOpened,
  initialTitle,
  initialLabel,
  initialNumber,
  initialWriter,
  initialTimestamp,
  initialMilestone,
}) => {
  const [value, setValue] = useState(false);
  const [opened, setOpened] = useState(initialOpened);
  const [title, setTitle] = useState(initialTitle);
  const [label, setLabel] = useState(initialLabel);
  const [number, setNumber] = useState(initialNumber);
  const [writer, setWriter] = useState(initialWriter);
  const [timestamp, setTimestamp] = useState(initialTimestamp);
  const [milestone, setMilestone] = useState(initialMilestone);

  return (
    <StyledIssueTableCell>
      <input
        type={"checkbox"}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <div>opened: {opened}</div>
      <div>이슈 제목: {title}</div>
      <div>레이블 이름: {label}</div>
      <div>이슈 번호: {number}</div>
      <div>작성자: {writer}</div>
      <div>타임스탬프: {timestamp}</div>
      <div>마일스톤 이름: {milestone}</div>
      <div>{children}</div>
    </StyledIssueTableCell>
  );
};

export default IssueTableCell;
