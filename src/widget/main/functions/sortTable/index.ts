import { TableArr } from "@/shared/model";
import { Sort } from "@/entities/sort";

type SortFunction = (data: TableArr, sortOptions: Sort) => TableArr;

const sortNumber: SortFunction = (data, { id, value }) => {
  const key = id as never;

  if (value === "asc") {
    return [...data].sort((a, b) => a[key] - b[key]);
  }
  if (value === "desc") {
    return [...data].sort((a, b) => b[key] - a[key]);
  }

  return data;
};

const sortSting: SortFunction = (data, { id, value }) => {
  const key = id as never;

  if (value === "asc") {
    return [...data].sort(
      (a, b) => (a[key] as string).length - (b[key] as string).length,
    );
  }
  if (value === "desc") {
    return [...data].sort(
      (a, b) => (b[key] as string).length - (a[key] as string).length,
    );
  }

  return data;
};

const sortBoolean: SortFunction = (data, { id, value }) => {
  const key = id as never;
  return [...data].filter((item) => item[key] + "" === value);
};

export const sortTable: SortFunction = (data, sortOptions) => {
  const { type } = sortOptions;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (!item?.children) {
      continue;
    }

    item.children = sortTable(item.children, sortOptions);
  }

  //? SORT NUMBER
  if (type === "number") {
    return sortNumber(data, sortOptions);
  }

  //? SORT STRING
  if (type === "string") {
    return sortSting(data, sortOptions);
  }

  if (type === "boolean") {
    return sortBoolean(data, sortOptions);
  }

  return data;
};
