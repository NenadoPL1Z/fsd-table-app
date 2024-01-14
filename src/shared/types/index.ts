import { ReactNode } from "react";

export type DeleteClassName<T> = Omit<T, "className">;

export type ExpandClassNames<T> = T & {
  clsNames?: string[];
};

export type Nullable<T> = T | null;

export type ChildrenProps<T> = T & {
  children: ReactNode;
};
