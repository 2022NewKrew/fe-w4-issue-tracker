import { useParams } from "react-router-dom";

export const IssueDetail = () => {
  // get id from url
  const { issueId } = useParams();

  return <div>{issueId}</div>;
};
