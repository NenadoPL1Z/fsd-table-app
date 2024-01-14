import { Button } from "@/shared/ui";
import { ErrorWrapperProps } from "./types";
import styles from "./ErrorWrapper.module.scss";

export const ErrorWrapper = ({ onRetry }: ErrorWrapperProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Что-то пошло не так!</h1>
        <Button onClick={onRetry}>Повторить попытку</Button>
      </div>
    </section>
  );
};
