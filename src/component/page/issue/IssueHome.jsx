import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../../atoms/Button";
import { CheckBox } from "../../atoms/CheckBox";
import { FilterBar } from "../../molecules/FilterBar";
import { IssueItem } from "../../molecules/IssueItem";
import { Taps } from "../../molecules/Taps";

const data = [
  {
    title: "이슈 제목",
    issueId: 1,
    description: "이 이슈가 8분 전, Oni님에 의해 작성되었습니다",
    labels: [
      { name: "document", backgroundColor: "blue", isBright: true },
      { name: "feature", backgroundColor: "red", isBright: false },
      { name: "error", backgroundColor: "green", isBright: true },
    ],
    milestone: "마스터즈 코스",
  },
  {
    title: "이슈 제목",
    issueId: 2,
    description: "이 이슈가 8분 전, Oni님에 의해 작성되었습니다",
    labels: [],
    milestone: "마스터즈 코스",
  },
  {
    title: "이슈 제목",
    issueId: 3,
    description: "이 이슈가 8분 전, Oni님에 의해 작성되었습니다",
    labels: [],
    milestone: "마스터즈 코스",
  },
];

export const IssueHome = () => {
  const [checked, setCheck] = useState(false);
  const [issueList, setIssueList] = useState(data);
  const handleClick = () => {
    if (checked) {
      checkedIssues.current.clear();
      setIssueList((prev) => prev.map((item) => ({ ...item, checked: false })));
    } else {
      //issueList.forEach((item) => checkedIssues.current.add(item.issueId));
      checkedIssues.current = new Set(issueList.map((item) => item.issueId));
      setIssueList((prev) => prev.map((item) => ({ ...item, checked: true })));
    }
    setCheck((prev) => !prev);
  };

  const checkedIssues = useRef(new Set());
  const handleChecked = (id) => {
    setIssueList((prev) =>
      prev.map((item) =>
        item.issueId === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item
      )
    );
    if (checkedIssues.current.delete(id)) {
      return;
    }
    checkedIssues.current.add(id);
  };

  const issueItems = issueList.map((item) => <IssueItem key={item.issueId} item={item} handleCheckedList={handleChecked} checked={item.checked} />);

  return (
    <>
      <Header>
        <FilterBar />
        <RightItems>
          <Taps labelCount={3} milestoneCount={2} />
          <Link to="new">
            <Button options={{ type: "Small-Standard", prefixIcon: "plus" }}>이슈 작성</Button>
          </Link>
        </RightItems>
      </Header>
      <IssueTable>
        <IssueTableHeader>
          <CheckBox onClick={handleClick} checked={checked} />
          <Button options={{ type: "Medium-Text", prefixIcon: "alert-circle" }}>열린 이슈(2)</Button>
          <Button options={{ type: "Medium-Text", prefixIcon: "archive" }}>닫힌 이슈(0)</Button>
          <RightItems></RightItems>
        </IssueTableHeader>
        {issueItems}
      </IssueTable>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const RightItems = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 16px;
  }
`;

const IssueTable = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.grayscale.line};
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    overflow: hidden;
    width: 100%;

    & > *:not(:last-child) {
      border-bottom: 1px solid ${theme.grayscale.line};
    }
  `
);

const IssueTableHeader = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.background};
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
  `
);
