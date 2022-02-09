import { useIssueFormStore, useIssueStore } from "@stores/issue";
import AppLayout from "@templetes/AppLayout";
import { Issue } from "@types";
import { IssueInfo } from "@UI/Molecules";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const IssueDetail = () => {
  const parms = useParams();
  const { issueList } = useIssueStore();
  const { setIssueFormMode, setIssueForm } = useIssueFormStore();

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
    </AppLayout>
  );
};

export default IssueDetail;
