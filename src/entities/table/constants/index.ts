import { TableLine } from "@/shared/model";
import { HeaderItemType } from "@/feature/header";
import { BooleanSort, NumberSort, StringSort } from "@/entities/sort";

type TabKey = keyof Omit<TableLine, "children">;

type Data = Record<TabKey, HeaderItemType>;

const tableStructure: Data = {
  id: {
    id: "id",
    name: "id",
    type: "number",
    sort: NumberSort,
  },
  parentId: {
    id: "parentId",
    name: "parent",
    type: "number",
    sort: NumberSort,
  },
  name: {
    id: "name",
    name: "имя",
    type: "string",
    sort: StringSort,
  },
  email: {
    id: "email",
    name: "email",
    type: "string",
    sort: StringSort,
  },
  balance: {
    id: "balance",
    name: "баланс",
    type: "number",
    sort: NumberSort,
  },
  isActive: {
    id: "isActive",
    name: "активный",
    type: "boolean",
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
