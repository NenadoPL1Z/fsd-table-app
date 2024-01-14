import { HeaderItem } from "@/feature/table/ui";
import styles from "./Header.module.scss";
import { tableHeader } from "@/entities/table";

export const Header = () => {
  return (
    <header className={styles.root}>
      {tableHeader.map((item) => (
        <HeaderItem key={item.name} {...item} />
      ))}
    </header>
  );
};
