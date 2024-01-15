import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Nullable, SelectionOptionValue, SortType } from "@/shared/types";
import { TableLine } from "@/shared/model";

type Sort = {
  tabName: keyof TableLine;
  filter: string;
  sortType: SortType;
  sort: SelectionOptionValue;
};

interface SortState {
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
