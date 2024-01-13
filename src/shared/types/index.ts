export type DeleteClassName<T> = Omit<T, "className">;

export type ExpandClassNames<T> = T & {
  clsNames?: string[];
};
