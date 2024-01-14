import { useState } from "react";

import type { ChangeStatusFunctionType, StatusState } from "./types";

type NotRequiredStatus = Partial<StatusState>;

export const useStatus = (initialArg?: NotRequiredStatus) => {
  const initialState: StatusState = {
    isLoading: true,
    hasError: "",
    ...initialArg,
  };

  const [{ isLoading, hasError }, setStatus] =
    useState<StatusState>(initialState);

  const isError = !!hasError;

  const handleChangeStatus: ChangeStatusFunctionType = (state) => {
    setStatus((prevState) => ({ ...prevState, ...state }));
  };

  const handleLoadingStatus = () => {
    handleChangeStatus({ isLoading: true, hasError: "" });
  };

  const handleErrorStatus = (
    hasError: Pick<StatusState, "hasError">["hasError"],
  ) => {
    handleChangeStatus({ isLoading: false, hasError });
  };

  const handleClearStatus = () => {
    setStatus({ isLoading: false, hasError: "" });
  };

  return {
    isLoading,
    isError,
    hasError,

    handleChangeStatus,

    handleLoadingStatus,
    handleErrorStatus,
    handleClearStatus,
  };
};
