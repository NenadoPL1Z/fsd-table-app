export const checkIsNaN = (number: number | string) => {
  return isNaN(+number) ? 0 : +number;
};
