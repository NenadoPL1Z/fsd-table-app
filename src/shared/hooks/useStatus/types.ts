export interface StatusState {
  isLoading: boolean;
  hasError: string;
}

export type ChangeStatusFunctionType = (status: Partial<StatusState>) => void;
