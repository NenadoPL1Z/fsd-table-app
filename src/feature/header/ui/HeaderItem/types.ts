import { TableLine } from "@/shared/model";

export type HeaderItemType = {
  name: string;
  type: TableLine[keyof TableLine];
};
