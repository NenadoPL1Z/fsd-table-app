import styles from "./Main.module.scss";
import { MainProps } from "./types";
import { MainLine } from "@/feature/table/ui";

export const Main = ({ info }: MainProps) => {
  return (
    <main className={styles.root}>
      {info.map((item) => (
        <MainLine key={item.id} {...item} />
      ))}
    </main>
  );
};
