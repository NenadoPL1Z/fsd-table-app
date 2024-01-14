import { memo } from "react";
import { MainProps } from "./types";
import { MainRows } from "@/feature/main";
import styles from "./Main.module.scss";

const Component = ({ rows }: MainProps) => {
  return (
    <main className={styles.root}>
      <MainRows rows={rows} />
    </main>
  );
};

export const Main = memo(Component);
