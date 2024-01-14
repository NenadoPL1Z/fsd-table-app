import { TableItem } from "@/shared/model";

export type HeaderItemType = {
  name: string;
  type: TableItem[keyof TableItem];
};
