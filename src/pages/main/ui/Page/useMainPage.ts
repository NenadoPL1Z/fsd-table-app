import { useEffect, useState } from "react";
import { Nullable } from "@/shared/types";
import { TableArr } from "@/shared/model";
import { useStatus } from "@/shared/hooks";
import { structuredTable } from "@/widget/main/functions";
import { getTableInfo } from "@/pages/main/api";

export const useMainPage = () => {
  const [tableInfo, setTableInfo] = useState<Nullable<TableArr>>(null);

  const {
    isLoading,
    isError,
    handleLoadingStatus,
    handleErrorStatus,
    handleClearStatus,
  } = useStatus();

  const successResult = (data: TableArr) => {
    const structured = structuredTable(data);
    setTableInfo(structured);
    handleClearStatus();
  };

  const catchResult = () => {
    setTimeout(() => {
      handleErrorStatus("Ошибка загрузки информации");
    }, 1000);
  };

  const loadData = () => {
    handleLoadingStatus();
    getTableInfo().then(successResult).catch(catchResult);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    isError,

    tableInfo,

    loadData,
  };
};
