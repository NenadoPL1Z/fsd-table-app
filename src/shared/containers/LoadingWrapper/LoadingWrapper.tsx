import styles from "./LoadingWrapper.module.scss";
import { Spinner } from "@/shared/ui";
export const LoadingWrapper = () => {
  return (
    <section className={styles.root}>
      <Spinner />
    </section>
  );
};
