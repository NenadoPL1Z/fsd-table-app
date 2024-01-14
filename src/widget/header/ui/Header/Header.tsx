import styles from "./Header.module.scss";
import { tableHeader } from "@/entities/table";
import { HeaderItem } from "@/feature/header";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.aside}></div>
      {tableHeader.map((item) => (
        <HeaderItem key={item.name} {...item} />
      ))}
    </header>
  );
};
