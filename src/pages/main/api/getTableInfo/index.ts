import { apiInstance } from "@/shared/http";
import { TableArr } from "@/shared/model";

export const getTableInfo = () => {
  return apiInstance.get<TableArr>("/mock/DATAMin.json").then((r) => r.data);
};
