import { ReactNode } from "react";

export type Nullable<T> = T | null;

export type ChildrenProps<T> = T & {
  children: ReactNode;
};

export type SortType = "string" | "number" | "boolean";

export type SelectionOptionValue = "asc" | "desc" | "true" | "false" | "";

export type SelectOption = {
  label: string;
  value: SelectionOptionValue;
};

export type SelectOptions = SelectOption[];
