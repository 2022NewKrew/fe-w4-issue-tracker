import { TableHeader, TableCell } from "@UI/Molecules";

import styled from "@emotion/styled";

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

const IssueListTable = () => {
  const createIssueList = (issueList: any) =>
    issueList.map((issue: any) => <TableCell key={issue.id} issue={issue} />);

  return (
    <Wrapper className="IssueListTable">
      <TableHeader />
      {createIssueList(issueList)}
    </Wrapper>
  );
};

export default IssueListTable;

const Wrapper = styled.section`
  ${({ theme }) => theme.FlexCenter}
  margin-top: 24px;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 16px;
  & > .TableHeader {
    border-radius: 16px 16px 0 0;
  }
  & > .TableCell:last-child {
    border-radius: 0 0 16px 16px;
  }
`;
