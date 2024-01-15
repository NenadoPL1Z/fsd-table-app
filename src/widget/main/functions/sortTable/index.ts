import { SortFunction } from "../../types";
import { sortNumber } from "../sortNumber";
import { sortSting } from "../sortString";
import { sortBoolean } from "../sortBoolean";

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

  //? SORT BOOLEAN
  if (type === "boolean") {
    return sortBoolean(data, sortOptions);
  }

  return data;
};
