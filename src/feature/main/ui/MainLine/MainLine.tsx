import { memo } from "react";
import { TableLine } from "@/shared/model";
import { tableMain } from "@/entities/table";
import styles from "./MainLine.module.scss";

const Component = (props: TableLine) => {
  return (
    <div className={styles.root}>
      {tableMain.map((key) => (
        <div key={key} className={styles.item}>
          {`${props[key]}`}
        </div>
      ))}
    </div>
  );
};

export const MainLine = memo(Component);
