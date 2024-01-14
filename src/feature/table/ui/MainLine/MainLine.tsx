import { TableLine } from "@/shared/model";
import styles from "./MainLine.module.scss";
import { tableMain } from "@/entities/table";

export const MainLine = (props: TableLine) => {
  return (
    <div className={styles.root}>
      {tableMain.map((key) => (
        <div key={key} className={styles.item}>
          {props[key] + ""}
        </div>
      ))}
    </div>
  );
};
