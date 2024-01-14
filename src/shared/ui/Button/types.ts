import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { DeleteClassName, ExpandClassNames } from "@/shared/types";

type ButtonHtml = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ExpandClassNames<DeleteClassName<ButtonHtml>>;
