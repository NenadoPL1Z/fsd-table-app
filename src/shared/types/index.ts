import { ReactNode } from "react";

export type Nullable<T> = T | null;

export type ChildrenProps<T> = T & {
  children: ReactNode;
};
