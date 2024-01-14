import { memo } from "react";
import { TableArr } from "@/shared/model";
import { MainRow } from "@/feature/main";

interface MainRows {
  rows: TableArr;
  nested: number;
}

const Component = ({ rows, nested }: MainRows) => {
  return (
    <>
      {rows.map((row) => (
        <MainRow key={row.id} nested={nested} {...row} />
      ))}
    </>
  );
};

export const MainRows = memo(Component);
