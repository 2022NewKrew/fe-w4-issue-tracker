import AppLayout from "@templetes/AppLayout";
import { IssueInfo } from "@UI/Molecules";
import { useIssueFormStore, useIssueStore } from "@stores/issue";
import { Issue } from "@types";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CommentList, SideBar } from "@UI/Organisms";

const IssueDetail = () => {
  const parms = useParams();
  const { issueList } = useIssueStore();
  const { setIssueForm, setIssueFormMode } = useIssueFormStore();
  useEffect(() => {
    if (!issueList.length) return;
    const { id, title, labels, milestone, assignees } = issueList.find(
      ({ id }) => id === parms.id
    ) as Issue;
    setIssueFormMode(id);
    setIssueForm({
      title,
      comment: "",
      labels: labels.map(({ id }) => id),
      assignees,
      milestone: milestone?.id || null,
    });
  }, [issueList]);

  return (
    <AppLayout>
      <IssueInfo />
      <div css={{ display: "flex", justifyContent: "space-between" }}>
        <CommentList />
        <SideBar />
      </div>
    </AppLayout>
  );
};

export default IssueDetail;
