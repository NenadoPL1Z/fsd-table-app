import { memo } from "react";
import { TableArr } from "@/shared/model";
import { MainRow } from "@/feature/main";

interface MainRows {
  rows: TableArr;
}

const Component = ({ rows }: MainRows) => {
  return (
    <>
      {rows.map((row) => (
        <MainRow key={row.id} {...row} />
      ))}
    </>
  );
};

export const MainRows = memo(Component);
