import { getOnlyNumber } from "@/shared/functions";
import { SortFunction } from "../../types";

const filterNumber: SortFunction = (data, sortOptions) => {
  const { id, filter } = sortOptions;
  const key = id as never;

  return data.filter((item) => {
    const result = (getOnlyNumber(item[key]) + "")
      .toLowerCase()
      .includes(filter.toLowerCase());

    if (!result && item.children) {
      const deepResult = filterNumber(item.children, sortOptions);
      return deepResult.length;
    }

    return result;
  });
};

export const sortNumber: SortFunction = (data, sortOptions) => {
  const { id, value, filter } = sortOptions;
  const key = id as never;
  let result = [...data];

  if (value === "asc") {
    result = result.sort((a, b) => {
      return getOnlyNumber(a[key]) - getOnlyNumber(b[key]);
    });
  }

  if (value === "desc") {
    result = result.sort((a, b) => {
      return getOnlyNumber(b[key]) - getOnlyNumber(a[key]);
    });
  }

  if (filter) {
    result = filterNumber(result, sortOptions);
  }

  return result;
};
