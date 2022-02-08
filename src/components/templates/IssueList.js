import React from "react";
import { IssueListPageHeader, IssueTable } from "@organisms";

function IssueList() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IssueListPageHeader />
      <IssueTable />
    </React.Suspense>
  );
}

export default IssueList;
