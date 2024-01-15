import { MainProps } from "@/widget/main/ui/Main/types";
import { sortStore } from "@/entities/sort";
import { useMemo } from "react";
import { sortTable } from "@/widget/main/functions";

export const useMain = ({ rows }: MainProps) => {
  const { sort } = sortStore();

  const displayRows = useMemo(() => {
    if (!sort) return rows;
    return sortTable(rows, sort);
  }, [rows, sort]);

  return {
    displayRows,
  };
};
