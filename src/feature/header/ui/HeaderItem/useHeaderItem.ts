import { HeaderItemType } from "@/feature/header";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { SelectionOptionValue } from "@/shared/types";
import { sortStore } from "@/entities/sort";

export const useHeaderItem = ({ tabName, sortType }: HeaderItemType) => {
  const { sort, setSort, clearSort } = sortStore();

  //? STATES
  const [selectValue, setSelectValue] = useState<SelectionOptionValue>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleSetSort = () => {
    setSort({ tabName, sortType, sort: selectValue, filter: inputValue });
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectValue(event.target.value as SelectionOptionValue);
  };
  //? SET SORT
  useEffect(() => {
    const isValue = selectValue || inputValue;
    if (isValue) {
      handleSetSort();
    }
    if (!isValue) {
      clearSort();
    }
  }, [selectValue, inputValue]);

  //? CLEAR LOCAL STATE
  useEffect(() => {
    const isClear = sort?.tabName !== tabName && (selectValue || inputValue);

    if (isClear) {
      setSelectValue("");
      setInputValue("");
    }
  }, [sort]);

  return {
    inputValue,
    selectValue,

    onChangeInput,
    onChangeSelect,
  };
};
