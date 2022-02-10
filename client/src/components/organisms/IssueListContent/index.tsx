import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { IssueListTitle, IssueListItem } from "@/components/molecules";
import { useNavigate } from "react-router-dom";
import { useIssueStore } from "@/stores/issue";

const IssueList: React.FC = () => {
  const navigate = useNavigate();
  const { issueList, openIssueList, filterdIssueList } = useIssueStore();

  const transItemList = useCallback(
    clickHandler => {
      return filterdIssueList.map((issueItem: any, idx: any) => {
        const Props = {
          ...issueItem,
          key: `issue-list-${idx}`,
          styles: {
            height: "100px",
            background: "#004DE3",
          },
          onClick: clickHandler(issueItem.issueNumber),
        };
        return <IssueListItem {...Props} />;
      });
    },
    [filterdIssueList],
  );
  const itemClickHandler = useCallback((value: any) => {
    return () => navigate(`/issue/${value}`);
  }, []);
  const IssueListProp = useMemo(() => ({ open: openIssueList.length }), [issueList]);
  return (
    <IssueListWrap>
      <IssueListTitle {...IssueListProp} />
      {transItemList(itemClickHandler)}
    </IssueListWrap>
  );
};
const IssueListWrap = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #d9dbe9;
  border-radius: 16px;
  overflow: hidden;
  & > * {
    border-bottom: 1px solid #d9dbe9;
  }
  & > *:last-child {
    border-bottom: 0px;
  }
`;
export default IssueList;
