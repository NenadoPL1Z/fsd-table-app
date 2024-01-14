import { TableLine } from "@/shared/model";
import { HeaderItemType } from "@/feature/header";
import { BooleanSort, NumberSort, StringSort } from "@/entities/sort";

type TabKey = keyof Omit<TableLine, "children">;

type Data = Record<TabKey, HeaderItemType>;

const tableStructure: Data = {
  id: {
    name: "id",
    tabName: "id",
    sortType: "number",
    sort: NumberSort,
  },
  parentId: {
    name: "parent",
    tabName: "parentId",
    sortType: "number",
    sort: NumberSort,
  },
  name: {
    name: "имя",
    tabName: "name",
    sortType: "string",
    sort: StringSort,
  },
  email: {
    name: "email",
    tabName: "email",
    sortType: "string",
    sort: StringSort,
  },
  balance: {
    name: "баланс",
    tabName: "balance",
    sortType: "string",
    sort: NumberSort,
  },
  isActive: {
    name: "активный",
    tabName: "isActive",
    sortType: "boolean",
    sort: BooleanSort,
  },
};
const getTableHeader = () => {
  const result: HeaderItemType[] = [];

  for (const [, value] of Object.entries(tableStructure)) {
    result.push(value);
  }

  return result;
};

const getTableMain = () => {
  const result: TabKey[] = [];

  for (const [key] of Object.entries(tableStructure)) {
    result.push(key as TabKey);
  }

  return result;
};

export const tableHeader = getTableHeader();
export const tableMain = getTableMain();
