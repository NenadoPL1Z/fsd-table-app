import { SelectOptions, SortType } from "@/shared/types";
import { TableLine } from "@/shared/model";

export type HeaderItemType = {
  name: string;
  tabName: keyof TableLine;
  sortType: SortType;
  sort: SelectOptions;
};
