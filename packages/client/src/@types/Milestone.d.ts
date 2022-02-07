declare module "@types" {
  type MilestoneStatus = "open" | "closed";

  interface MilestoneJSON {
    id: string;
    name: string;
    description: string;
    deadline: string;
    issues: string[];
    status: MilestoneStatus;
  }

  interface Milestone {
    id: string;
    name: string;
    description: string;
    deadline: string;
    issues: IssueJSON[];
    status: MilestoneStatus;
  }

  interface MilestoneRequest {
    name: string;
    description: string;
    deadline: string;
  }
}
