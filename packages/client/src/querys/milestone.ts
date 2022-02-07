import { MilestoneService } from "@services";
import { Milestone } from "@types";
import { useQuery } from "react-query";

export const useGetMilestones = () =>
  useQuery<Milestone[], Error>("milestone", MilestoneService.getAll);

export const useGetMilestoneCount = () =>
  useQuery<Milestone[], Error, number>("milestone", MilestoneService.getAll, {
    select: (labels) => labels.length,
  });
