import { TableLine } from "@/shared/model";
import { HeaderItemType } from "@/feature/header";

type TabKey = keyof Omit<TableLine, "children">;

type Data = Record<TabKey, HeaderItemType>;

const tableStructure: Data = {
  id: { name: "id", type: "number" },
  parentId: { name: "parent", type: "number" },
  name: { name: "имя", type: "string" },
  email: { name: "почта", type: "string" },
  balance: { name: "баланс", type: "number" },
  isActive: { name: "активный", type: "boolean" },
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
