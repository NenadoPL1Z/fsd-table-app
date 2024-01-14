import { memo } from "react";
import styles from "./Main.module.scss";
import { MainProps } from "./types";
import { MainLine } from "@/feature/table/ui";

const Component = ({ info }: MainProps) => {
  return (
    <main className={styles.root}>
      {info.map((item) => (
        <MainLine key={item.id} {...item} />
      ))}
    </main>
  );
};

export const Main = memo(Component);
