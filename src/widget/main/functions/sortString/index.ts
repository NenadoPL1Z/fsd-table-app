import { SortFunction } from "../../types";

const filterSting: SortFunction = (data, sortOptions) => {
  const { id, filter } = sortOptions;
  const key = id as never;

  return data.filter((item) => {
    const result = (item[key] + "")
      .toLowerCase()
      .includes(filter.toLowerCase());

    if (!result && item.children) {
      const deepResult = filterSting(item.children, sortOptions);
      return deepResult.length;
    }

    return result;
  });
};

export const sortSting: SortFunction = (data, sortOptions) => {
  const { id, value, filter } = sortOptions;
  const key = id as never;
  let result = [...data];

  if (value === "asc") {
    result = result.sort((a, b) => {
      return (a[key] as string).length - (b[key] as string).length;
    });
  }

  if (value === "desc") {
    result = result.sort((a, b) => {
      return (b[key] as string).length - (a[key] as string).length;
    });
  }

  if (filter) {
    result = filterSting(result, sortOptions);
  }

  return result;
};
