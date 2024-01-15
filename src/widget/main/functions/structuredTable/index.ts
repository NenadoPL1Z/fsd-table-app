import { TableArr, TableLine } from "@/shared/model";

const setChildren = (data: TableArr, item: TableLine) => {
  if (data.length) {
    item.children = data;
  }
};
const generateRecursive = (data: TableArr, id: number) => {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.parentId !== id) {
      continue;
    }

    const recursionResult = generateRecursive(data, item.id);
    setChildren(recursionResult, item);

    result.push(item);
  }

  return result;
};
export const structuredTable = (data: TableArr) => {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.parentId) {
      continue;
    }

    const recursionResult = generateRecursive(data, item.id);
    setChildren(recursionResult, item);

    result.push(item);
  }

  return result;
};
