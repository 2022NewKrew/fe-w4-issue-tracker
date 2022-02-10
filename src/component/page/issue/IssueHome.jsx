import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getIssues, getLabels, getMilestones, patchCheckedIssue } from "../../../api";
import { Button } from "../../atoms/Button";
import { CheckBox } from "../../atoms/CheckBox";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { PageHeader, TableHeader, TableWrapper } from "../../commonLayout";
import { FilterBar } from "../../molecules/FilterBar";
import { IssueItem } from "../../molecules/IssueItem";
import { Taps } from "../../molecules/Taps";

export const IssueHome = () => {
  // local state
  const [checked, setCheck] = useState(false);
  const [filteredIssueList, setIssueList] = useState([]); // 나중에 필터 적용 예정
  const checkedIssues = useRef(new Set());

  // data fetch
  const { data: labels } = useQuery(["labels"], getLabels);
  const { data: milestones } = useQuery(["milestones"], getMilestones);
  const { data: issues, refetch } = useQuery(["issues"], getIssues);
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
      checkedIssues.current = new Set(filteredIssueList.map((item) => item.id));
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

  const issueItems = filteredIssueList.map((item) => <IssueItem key={item.id} item={item} handleCheckBoxById={handleCheckBoxById} checked={item.checked} />);
  const openIssuesLength = issues?.reduce((prev, item) => (item.status === "open" ? prev + 1 : prev), 0) || 0;
  const closedIssuesLength = issues?.reduce((prev, item) => (item.status === "close" ? prev + 1 : prev), 0) || 0;
  const labelsLength = labels?.length || 0;
  const milestonesLength = milestones?.length || 0;
  const checkedIssuesLength = checkedIssues.current.size;

  const issueTableHeader =
    checkedIssuesLength === 0 ? (
      <TableHeader>
        <CheckBox onClick={handleTotalCheckBox} checked={checked} />
        <Button options={{ type: "Medium-Text", prefixIcon: "alert-circle" }}>{`열린 이슈(${openIssuesLength})`}</Button>
        <Button options={{ type: "Medium-Text", prefixIcon: "archive" }}>{`닫힌 이슈(${closedIssuesLength})`}</Button>
        <RightItemWrapper>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>담당자</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>레이블</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>마일스톤</Button>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }}>작성자</Button>
        </RightItemWrapper>
      </TableHeader>
    ) : (
      <TableHeader>
        <CheckBox onClick={handleTotalCheckBox} checked={checked} />
        <span css={[cssFontSize["small"], cssLink]}>{`${checkedIssuesLength}개 이슈 선택`}</span>
        <RightItemWrapper>
          <Button options={{ type: "Medium-Text", suffixIcon: "arrow-down" }} onClick={changeStateCheckedIssue}>
            상태 수정
          </Button>
        </RightItemWrapper>
      </TableHeader>
    );

  return (
    <>
      <PageHeader>
        <FilterBar />
        <StyledTaps labelCount={labelsLength} milestoneCount={milestonesLength} />
        <Link to="new">
          <Button options={{ type: "Small-Standard", prefixIcon: "plus" }}>이슈 작성</Button>
        </Link>
      </PageHeader>
      <TableWrapper>
        {issueTableHeader}
        {issueItems}
      </TableWrapper>
    </>
  );
};

const StyledTaps = styled(Taps)`
  margin: 0 16px 0 auto;
`;

const RightItemWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 16px;
  }
`;
