import { ReactNode } from "react";

export type Nullable<T> = T | null;

export type ChildrenProps<T> = T & {
  children: ReactNode;
};

export type SelectOption = {
  label: string;
  value: { type: string; value: string };
};

export type SelectOptions = SelectOption[];
