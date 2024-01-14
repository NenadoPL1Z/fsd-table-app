import { useState } from "react";
import { MainRowProps } from "@/feature/main/ui/MainRow/types";

export const useMainRow = (props: MainRowProps) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDisplayChildren = children && isOpen;

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    children,

    isOpen,
    isDisplayChildren,

    handleToggle,
  };
};
