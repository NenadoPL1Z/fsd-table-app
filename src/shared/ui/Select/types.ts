import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { SelectOptions } from "@/shared/types";

type SelectHTML = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type SelectProps = Omit<SelectHTML, "options"> & {
  options: SelectOptions;
};
