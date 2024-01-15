import { MainProps } from "@/widget/main/ui/Main/types";
import { sortStore } from "@/entities/sort";
import { useMemo } from "react";
import { sortTable } from "@/widget/main/functions";
import { TableArr } from "@/shared/model";
import { getDeepCopy } from "@/shared/functions";

export const useMain = ({ rows }: MainProps) => {
  const { sort } = sortStore();

  const displayRows = useMemo(() => {
    if (!sort) return rows;
    const deep = getDeepCopy<TableArr>(rows);
    return sortTable(deep, sort);
  }, [rows, sort]);

  return {
    displayRows,
  };
};
