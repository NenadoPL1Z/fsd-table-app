import { memo } from "react";
import { HeaderItemType } from "./types";
import styles from "./HeaderItem.module.scss";

const Component = ({ name }: HeaderItemType) => {
  return <div className={styles.root}>{name}</div>;
};

export const HeaderItem = memo(Component);
