import { memo, useMemo } from "react";
import styles from "./MainAside.module.scss";

interface MainAsideProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Component = ({ isOpen, handleToggle }: MainAsideProps) => {
  const buttonText = useMemo(() => (isOpen ? "-" : "+"), [isOpen]);

  return (
    <div>
      <button className={styles.button} onClick={handleToggle}>
        {buttonText}
      </button>
    </div>
  );
};

export const MainAside = memo(Component);
