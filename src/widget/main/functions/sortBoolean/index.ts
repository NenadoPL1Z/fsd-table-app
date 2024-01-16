import { SortFunction } from "../../types";

const filterBoolean: SortFunction = (data, sortOptions) => {
  const { id, filter } = sortOptions;
  const key = id as never;

  return data.filter((item) => {
    const result = (item[key] + "")
      .toLowerCase()
      .includes(filter.toLowerCase());

    if (!result && item.children) {
      const deepResult = filterBoolean(item.children, sortOptions);
      return deepResult.length;
    }

    return result;
  });
};

export const sortBoolean: SortFunction = (data, sortOptions) => {
  const { id, value, filter } = sortOptions;
  const key = id as never;
  let result = [...data];

  if (value) {
    result = result.filter((item) => item[key] + "" === value);
  }

  if (filter) {
    result = filterBoolean(result, sortOptions);
  }

  return result;
};
