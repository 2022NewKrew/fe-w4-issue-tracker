import { useQuery } from "react-query";
import { Issue } from "@types";
import { IssueService } from "@services";

export const useGetIssue = () =>
  useQuery<Issue[], Error>("issue", IssueService.get);
