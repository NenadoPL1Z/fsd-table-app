import { CSSProperties, useState } from "react";
import { MainRowProps } from "@/feature/main/ui/MainRow/types";

export const useMainRow = (props: MainRowProps) => {
  const { children, nested } = props;
  const isChildren = !!children?.length;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDisplayChildren = isChildren && isOpen;

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const dynamicPadding: CSSProperties = {
    paddingLeft: `${nested * 8 || 3}px`,
  };

  const dynamicLine: CSSProperties = {
    left: `${nested * 10}px`,
    opacity: `0.${3 + nested * 2}`,
  };

  return {
    children,

    isOpen,
    isChildren,
    isDisplayChildren,

    dynamicPadding,
    dynamicLine,

    handleToggle,
  };
};
