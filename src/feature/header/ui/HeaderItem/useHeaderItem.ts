import { HeaderItemType } from "@/feature/header";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { SelectionOptionValue } from "@/shared/types";
import { sortStore } from "@/entities/sort";

export const useHeaderItem = ({ id, type }: HeaderItemType) => {
  const { sort, setSort, clearSort } = sortStore();
  const isActive = sort?.id === id;

  //? STATES
  const [selectValue, setSelectValue] = useState<SelectionOptionValue>("");
  const [inputValue, setInputValue] = useState<string>("");

  //? HANDLERS
  const handleReset = () => {
    if (inputValue) setInputValue("");
    if (selectValue) setSelectValue("");
  };

  const handleSetSort = ({ value = selectValue, filter = inputValue }) => {
    const isValue = value || filter;

    if (isValue) {
      setSort({ id, type, value, filter });
    }

    if (!isValue) {
      clearSort();
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    setInputValue(filter);
    handleSetSort({ filter });
  };

  const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value as SelectionOptionValue;
    setSelectValue(value);
    handleSetSort({ value });
  };

  //? clear prev sort
  useEffect(() => {
    if (!isActive) {
      handleReset();
    }
  }, [isActive]);

  return {
    inputValue,
    selectValue,
    onChangeInput,
    onChangeSelect,
  };
};
