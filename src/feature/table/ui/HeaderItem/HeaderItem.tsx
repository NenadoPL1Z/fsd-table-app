import { HeaderItemType } from "./types";
import styles from "./HeaderItem.module.scss";

export const HeaderItem = ({ name }: HeaderItemType) => {
  return <div className={styles.root}>{name}</div>;
};
