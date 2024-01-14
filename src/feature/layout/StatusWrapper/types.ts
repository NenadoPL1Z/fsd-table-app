import { ErrorWrapperProps } from "@/shared/containers";
import { ChildrenProps } from "@/shared/types";

interface Props {
  isLoading: boolean;
  error: { isError: boolean } & ErrorWrapperProps;
}

export type StatusWrapperProps = ChildrenProps<Props>;
