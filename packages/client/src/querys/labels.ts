import { useQuery } from "react-query";

import { Label } from "@types";
import { LabelService } from "@services";

export const useGetLabels = () =>
  useQuery<Label[], Error>("labels", LabelService.getAll);

export const useGetLabelCount = () =>
  useQuery<Label[], Error, number>("labels", LabelService.getAll, {
    select: (labels) => labels.length,
  });
