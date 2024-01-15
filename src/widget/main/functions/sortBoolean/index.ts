import { SortFunction } from "../../types";

const filterBoolean: SortFunction = (data, { id, filter }) => {
  const key = id as never;

  return data.filter((item) => {
    return (item[key] + "").toLowerCase().includes(filter.toLowerCase());
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
