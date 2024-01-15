import { SelectOptions, SortType } from "@/shared/types";
import { TableLineKeyofUnion } from "@/shared/model";

export type HeaderItemType = {
  id: TableLineKeyofUnion;
  name: string;
  type: SortType;
  sort: SelectOptions;
};
