import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Nullable, SelectionOptionValue, SortType } from "@/shared/types";
import { TableLineKeyofUnion } from "@/shared/model";

export type StoreSort = {
  tabName: TableLineKeyofUnion;
  filter: string;
  sortType: SortType;
  sort: SelectionOptionValue;
};

export interface SortState {
  sort: Nullable<StoreSort>;
  setSort: (sort: StoreSort) => void;
  clearSort: () => void;
}
export const sortStore = create<SortState>()(
  devtools((set) => ({
    sort: null,
    setSort: (sort) => set(() => ({ sort })),
    clearSort: () => set(() => ({ sort: null })),
  })),
);
