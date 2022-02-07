import { useQuery } from "react-query";
import { Issue, IssueStatus } from "@types";
import { IssueService } from "@services";

export const useGetIssue = (issueStatus: IssueStatus) =>
  useQuery<Issue[], Error>(["issue", issueStatus], () =>
    IssueService.get(issueStatus)
  );
