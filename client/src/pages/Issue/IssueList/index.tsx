import React from "react";
import { IssueListContent } from "@/components/organisms";
import { IssueListHeader } from "@/components/organisms";

const Issue: React.FC = () => {
  const IssueListHeaderProps = {};
  const IssueListContentProps = {};
  return (
    <>
      <IssueListHeader {...IssueListHeaderProps} />
      <IssueListContent {...IssueListContentProps} />
    </>
  );
};

export default Issue;
