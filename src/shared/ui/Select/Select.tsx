import { memo } from "react";
import { SelectProps } from "./types";

export const Component = ({ options, ...props }: SelectProps) => {
  return (
    <select {...props}>
      {options.map((option) => (
        <option key={option.label} value={JSON.stringify(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export const Select = memo(Component);
