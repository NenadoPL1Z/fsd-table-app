import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { DeleteClassName, ExpandClassNames } from "@/shared/types";

type ButtonHtml = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = ExpandClassNames<DeleteClassName<ButtonHtml>>;

export const Button = (props: ButtonProps) => {
  const { clsNames = [] } = props;
  const className = classNames(styles.root, ...clsNames);

  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};
