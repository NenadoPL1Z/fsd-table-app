import { memo } from "react";
import { HeaderItemType } from "./types";
import styles from "./HeaderItem.module.scss";
import { Select } from "@/shared/ui/Select/Select";
import { Button } from "@/shared/ui";

const Component = ({ name, sort }: HeaderItemType) => {
  return (
    <div className={styles.root}>
      {name}
      <div className={styles.select}>
        <Select options={sort} />
      </div>
      <div className={styles.filter}>
        <input className={styles.input} placeholder="Фильтр" />
      </div>
      <Button>Применить</Button>
    </div>
  );
};

export const HeaderItem = memo(Component);
