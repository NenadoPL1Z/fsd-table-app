import { memo } from "react";
import { StatusWrapperProps } from "./types";
import { ErrorWrapper, LoadingWrapper } from "@/shared/containers";
const Component = ({ children, isLoading, error }: StatusWrapperProps) => {
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

export const StatusWrapper = memo(Component);
