import { headerDataArr } from "../../lib/constants";
import { HeaderItem } from "@/feature/table/ui";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      {headerDataArr.map((item) => (
        <HeaderItem key={item.name} {...item} />
      ))}
    </header>
  );
};
