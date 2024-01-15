import { TableArr } from "@/shared/model";
import { Sort } from "@/entities/sort";

export type SortFunction = (data: TableArr, sortOptions: Sort) => TableArr;
