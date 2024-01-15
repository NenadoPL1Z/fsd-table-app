import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Nullable, SelectionOptionValue, SortType } from "@/shared/types";
import { TableLineKeyofUnion } from "@/shared/model";

export type Sort = {
  id: TableLineKeyofUnion;
  type: SortType;
  value: SelectionOptionValue;
  filter: string;
};

export interface SortState {
  sort: Nullable<Sort>;
  setSort: (sort: Sort) => void;
  clearSort: () => void;
}
export const sortStore = create<SortState>()(
  devtools((set) => ({
    sort: null,
    setSort: (sort) => set(() => ({ sort })),
    clearSort: () => set(() => ({ sort: null })),
  })),
);
