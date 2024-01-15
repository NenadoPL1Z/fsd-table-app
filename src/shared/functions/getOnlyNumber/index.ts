export const getOnlyNumber = (data: unknown) => {
  if (typeof data === "string") {
    return data.replace(/\D/g, "");
  }

  return data;
};
