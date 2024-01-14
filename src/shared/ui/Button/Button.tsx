import { memo } from "react";
import { ButtonProps } from "./types";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Component = (props: ButtonProps) => {
  const { clsNames = [] } = props;
  const className = classNames(styles.root, ...clsNames);

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export const Button = memo(Component);
