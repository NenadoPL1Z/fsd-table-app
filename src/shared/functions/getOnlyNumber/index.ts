export const getOnlyNumber = (data: number | string): number => {
  if (typeof data === "string") {
    return +data.replace(/\D/g, "");
  }
  return data;
};
