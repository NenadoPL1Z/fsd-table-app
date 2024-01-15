export const getDeepCopy = <T>(obj: T) => {
  return JSON.parse(JSON.stringify(obj));
};
