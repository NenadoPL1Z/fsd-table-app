import { memo } from "react";
import { MainAside, MainLine, MainRows } from "@/feature/main";
import styles from "./MainRow.module.scss";
import { useMainRow } from "./useMainRow";
import { MainRowProps } from "./types";
import { TableArr } from "@/shared/model";

const Component = (props: MainRowProps) => {
  const { children, isOpen, isDisplayChildren, handleToggle } =
    useMainRow(props);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          {children && (
            <MainAside isOpen={isOpen} handleToggle={handleToggle} />
          )}
        </div>
        <MainLine {...props} />
      </div>
      {isDisplayChildren && (
        <MainRows nested={props.nested + 1} rows={children as TableArr} />
      )}
    </div>
  );
};

export const MainRow = memo(Component);
