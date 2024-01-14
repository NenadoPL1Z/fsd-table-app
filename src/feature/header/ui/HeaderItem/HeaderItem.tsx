import { memo } from "react";
import { HeaderItemType } from "./types";
import styles from "./HeaderItem.module.scss";
import { HeaderSort } from "@/feature/header";

const Component = ({ name, type }: HeaderItemType) => {
  return (
    <div className={styles.root}>
      <HeaderSort sort={type} />
      {name}
    </div>
  );
};

export const HeaderItem = memo(Component);
