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

  interface MilestoneDTO {
    id: string;
    name: string;
    description: string;
    deadline: string;
    issues: IssueJSON[];
    status: MilestoneStatus;
  }

  interface MilestoneRequestDTO {
    name: string;
    description: string;
    deadline: string;
  }
}
