import { memo } from "react";
import { SelectProps } from "./types";
import styles from "./Select.module.scss";

export const Component = ({ options, ...props }: SelectProps) => {
  return (
    <select className={styles.select} {...props}>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const Select = memo(Component);
