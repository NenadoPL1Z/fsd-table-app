import { memo, useMemo } from "react";

interface MainAsideProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const Component = ({ isOpen, handleToggle }: MainAsideProps) => {
  const buttonText = useMemo(() => (isOpen ? "-" : "+"), [isOpen]);

  return (
    <div>
      <button onClick={handleToggle}>{buttonText}</button>
    </div>
  );
};

export const MainAside = memo(Component);
