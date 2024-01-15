import { SelectOptions, SortType } from "@/shared/types";
import { TableLineKeyofUnion } from "@/shared/model";

export type HeaderItemType = {
  name: string;
  tabName: TableLineKeyofUnion;
  sortType: SortType;
  sort: SelectOptions;
};
