import { memo } from "react";
import { MainProps } from "./types";
import { MainRows } from "@/feature/main";
import styles from "./Main.module.scss";
import { useMain } from "@/widget/main/ui/Main/useMain";

const Component = (props: MainProps) => {
  const { displayRows } = useMain(props);

  return (
    <main className={styles.root}>
      <MainRows nested={0} rows={displayRows} />
    </main>
  );
};

export const Main = memo(Component);
