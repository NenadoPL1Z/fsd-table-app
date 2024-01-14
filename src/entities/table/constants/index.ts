import { TableLine } from "@/shared/model";
import { HeaderItemType } from "@/feature/header";
import { BooleanSort, NumberSort, StringSort } from "@/entities/sort";

type TabKey = keyof Omit<TableLine, "children">;

type Data = Record<TabKey, HeaderItemType>;

const tableStructure: Data = {
  id: { name: "id", sort: NumberSort },
  parentId: { name: "parent", sort: NumberSort },
  name: { name: "имя", sort: StringSort },
  email: { name: "email", sort: StringSort },
  balance: { name: "баланс", sort: NumberSort },
  isActive: { name: "активный", sort: BooleanSort },
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
