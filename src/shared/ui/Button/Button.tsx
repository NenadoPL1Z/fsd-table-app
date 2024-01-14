import { memo } from "react";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";

const Component = (props: ButtonProps) => {
  return (
    <button className={styles.root} {...props}>
      {props.children}
    </button>
  );
};

export const Button = memo(Component);
