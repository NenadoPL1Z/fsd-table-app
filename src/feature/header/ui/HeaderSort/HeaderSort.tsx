import { memo } from "react";
import Categories from "@/shared/assets/icons/Categories.svg";
import styles from "./HeaderSort.module.scss";
import { SortVariant } from "../../types";

interface HeaderSortProps {
  sort: SortVariant;
}

const Component = (props: HeaderSortProps) => {
  return (
    <button className={styles.root}>
      <Categories />
      {JSON.stringify(props.sort)}
    </button>
  );
};

export const HeaderSort = memo(Component);
