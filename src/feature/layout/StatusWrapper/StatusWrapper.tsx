import { StatusWrapperProps } from "./types";
import { ErrorWrapper, LoadingWrapper } from "@/shared/containers";
export const StatusWrapper = ({
  children,
  isLoading,
  error,
}: StatusWrapperProps) => {
  const isDisplayLoading = isLoading;
  const isDisplayError = !isDisplayLoading && error.isError;
  const isDisplayContent = !isDisplayLoading && !isDisplayError;

  return (
    <>
      {isDisplayLoading && <LoadingWrapper />}
      {isDisplayError && <ErrorWrapper onRetry={error.onRetry} />}
      {isDisplayContent && children}
    </>
  );
};
