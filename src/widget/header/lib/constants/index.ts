import { TableItem } from "@/shared/model";
import { HeaderItemType } from "@/feature/table/ui";

type Data = Record<keyof TableItem, HeaderItemType>;

const data: Data = {
  id: { name: "id", type: "number" },
  parentId: { name: "parent", type: "number" },
  isActive: { name: "активированный", type: "name" },
  balance: { name: "баланс", type: "number" },
  name: { name: "имя", type: "number" },
  email: { name: "почта", type: "qwe" },
};
const getHeaderDataArr = () => {
  const result: HeaderItemType[] = [];

  for (const [, value] of Object.entries(data)) {
    result.push(value);
  }

  return result;
};

export const headerDataArr = getHeaderDataArr();
