import { memo } from "react";
import { HeaderItemType } from "./types";
import styles from "./HeaderItem.module.scss";
import { Select } from "@/shared/ui/Select/Select";
import { useHeaderItem } from "@/feature/header/ui/HeaderItem/useHeaderItem";

const Component = (props: HeaderItemType) => {
  const { name, sort } = props;

  const { selectValue, inputValue, onChangeSelect, onChangeInput } =
    useHeaderItem(props);

  return (
    <div className={styles.root}>
      <div>{name}</div>
      <div className={styles.select}>
        <Select value={selectValue} options={sort} onChange={onChangeSelect} />
      </div>
      <div className={styles.filter}>
        <input
          className={styles.input}
          placeholder="Фильтр"
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export const HeaderItem = memo(Component);
