import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { getIssues, getLabels, getMilestones, patchCheckedIssue } from "../../../api/api";
import { Button } from "../../atoms/Button";
import { CheckBox } from "../../atoms/CheckBox";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { FilterBar } from "../../molecules/FilterBar";
import { IssueItem } from "../../molecules/IssueItem";
import { Taps } from "../../molecules/Taps";

export const IssueHome = () => {
  // local state
  const [checked, setCheck] = useState(false);
  const [issueList, setIssueList] = useState([]); // 나중에 필터 적용 예정
  const checkedIssues = useRef(new Set());

  // data fetch
  const { data: labels } = useQuery(["labels"], getLabels, { staleTime: 5000 });
  const { data: milestones } = useQuery(["milestones"], getMilestones, { staleTime: 5000 });
  const { data: issues, refetch } = useQuery(["issues"], getIssues, { staleTime: 5000 });
  useEffect(() => {
    if (Array.isArray(issues)) {
      setIssueList(issues);
      setCheck(false);
      checkedIssues.current = new Set();
    }
  }, [issues]);

  // 전체 선택, 해제
  const handleTotalCheckBox = () => {
    if (checked) {
      checkedIssues.current.clear();
      setIssueList((prev) => prev.map((item) => ({ ...item, checked: false })));
    } else {
      checkedIssues.current = new Set(issueList.map((item) => item.id));
      setIssueList((prev) => prev.map((item) => ({ ...item, checked: true })));
    }
    setCheck((prev) => !prev);
  };

  // 이슈별 체크박스
  const handleCheckBoxById = (id) => {
    setIssueList((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? {
              ...issue,
              checked: !issue.checked,
            }
          : issue
      )
    );
    if (checkedIssues.current.delete(id)) {
      setCheck(false);
      return;
    }
    checkedIssues.current.add(id);
  };

  // 선택 이슈들 상태 변경
  const changeStateCheckedIssue = async () => {
    await patchCheckedIssue([...checkedIssues.current]);
    refetch();
  };

  const issueItems = issueList.map((item) => <IssueItem key={item.id} item={item} handleCheckBoxById={handleCheckBoxById} checked={item.checked} />);
  const numOpenIssue = issues?.reduce((prev, item) => (item.status === "open" ? prev + 1 : prev), 0) || 0;
  const numCloseIssue = issues?.reduce((prev, item) => (item.status === "close" ? prev + 1 : prev), 0) || 0;
  const numLabels = labels?.length || 0;
  const numMilestones = milestones?.length || 0;
  const numCheckedIssues = checkedIssues.current.size;

  const issueTableHeader =
    numCheckedIssues === 0 ? (
      <IssueTableHeader>
        <CheckBox onClick={handleTotalCheckBox} checked={checked} />
        <Button options={{ type: "Medium-Text", prefixIcon: "alert-circle" }}>{`열린 이슈(${numOpenIssue})`}</Button>
        <Button options={{ type: "Medium-Text", prefixIcon: "archive" }}>{`닫힌 이슈(${numCloseIssue})`}</Button>
        <IssueRightItems>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>담당자</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>레이블</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>마일스톤</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>작성자</Button>
        </IssueRightItems>
      </IssueTableHeader>
    ) : (
      <IssueTableHeader>
        <CheckBox onClick={handleTotalCheckBox} checked={checked} />
        <span css={[cssFontSize["small"], cssLink]}>{`${numCheckedIssues}개 이슈 선택`}</span>
        <IssueRightItems>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }} onClick={changeStateCheckedIssue}>
            상태 수정
          </Button>
        </IssueRightItems>
      </IssueTableHeader>
    );

  return (
    <>
      <Header>
        <FilterBar />
        <RightItems>
          <Taps labelCount={numLabels} milestoneCount={numMilestones} />
          <Link to="new">
            <Button options={{ type: "Small-Standard", prefixIcon: "plus" }}>이슈 작성</Button>
          </Link>
        </RightItems>
      </Header>
      <IssueTable>
        {issueTableHeader}
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
    color: ${theme.grayscale.label};
  `
);

const IssueRightItems = styled(RightItems)`
  margin-right: 16px;
`;
