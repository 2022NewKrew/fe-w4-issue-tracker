import TableHeader from "@components/Issue/IssueListTable/TableHeader";
import TableCell from "@components/Issue/IssueListTable/TableCell";

import { useCallback } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

const issueList = [
  {
    id: 1,
    title: "이슈 제목",
    author: "작성자",
    time: "작성 시간",
    label: [
      {
        title: "레이블 이름",
        color: "#004de3",
      },
    ],
    milestone: "마스터즈",
  },
  {
    id: 2,
    title: "이슈 제목2",
    author: "작성자2",
    time: "작성 시간",
    label: [
      {
        title: "레이블 이름",
        color: "#0fa123",
      },
    ],
    milestone: "마스터즈",
  },
];

const ListTable = () => {
  const issueListRender = useCallback(
    (issueList) =>
      issueList.map((issue: any) => <TableCell key={issue.id} issue={issue} />),
    []
  );

  return (
    <Wrapper>
      <TableHeader />
      {issueListRender(issueList)}
    </Wrapper>
  );
};

export default ListTable;

const Wrapper = styled.section`
  ${({ theme: { flexCenter, greyscale } }) => css`
    ${flexCenter}
    margin-top: 24px;
    width: 100%;
    border: 1px solid ${greyscale.line};
    border-radius: 16px;
    div:first-of-type {
      border-radius: 16px 16px 0 0;
    }
    li:last-child {
      border-radius: 0 0 16px 16px;
    }
  `}
`;
