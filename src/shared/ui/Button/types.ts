import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonHtml = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = ButtonHtml;
