import { useEffect, useState } from "react";
import { Nullable } from "@/shared/types";
import { TableArr } from "@/shared/model";
import { useStatus } from "@/shared/hooks";
import { getTableInfo } from "@/pages/main/api/getTableInfo";

export const useMainPage = () => {
  const [tableInfo, setTableInfo] = useState<Nullable<TableArr>>(null);

  const {
    isLoading,
    isError,
    handleLoadingStatus,
    handleErrorStatus,
    handleClearStatus,
  } = useStatus();

  const loadData = () => {
    handleLoadingStatus();

    getTableInfo()
      .then((data) => {
        setTableInfo(data);
        handleClearStatus();
      })
      .catch(() => {
        setTimeout(() => {
          handleErrorStatus("Ошибка загрузки информации");
        }, 1000);
      });
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
