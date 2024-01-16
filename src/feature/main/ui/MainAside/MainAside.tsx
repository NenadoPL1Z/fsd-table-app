import { memo, useMemo } from "react";
import styles from "./MainAside.module.scss";

interface MainAsideProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Component = ({ isOpen, handleToggle }: MainAsideProps) => {
  const buttonText = useMemo(() => (isOpen ? "-" : "+"), [isOpen]);

  return (
    <button
      className={`${styles.button} ${!isOpen && styles.open} ${isOpen && styles.close}`}
      onClick={handleToggle}>
      {buttonText}
    </button>
  );
};

export const MainAside = memo(Component);
