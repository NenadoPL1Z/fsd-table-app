import { TableLine } from "@/shared/model";
import styles from "./MainLine.module.scss";
import { booleanToYesOrNo } from "@/shared/functions";

export const MainLine = (props: TableLine) => {
  const { id, parentId, isActive, balance, name, email } = props;

  return (
    <div className={styles.root}>
      <div className={styles.item}>{id}</div>
      <div className={styles.item}>{parentId}</div>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>{email}</div>
      <div className={styles.item}>{balance}</div>
      <div className={styles.item}>{booleanToYesOrNo(isActive)}</div>
    </div>
  );
};
