import { SelectOptions } from "@/shared/types";

const GeneralSort: SelectOptions = [{ label: "По умолчанию", value: "" }];

export const StringSort: SelectOptions = [
  ...GeneralSort,
  { label: "По возрастанию", value: "asc" },
  { label: "По убыванию", value: "desc" },
];

export const NumberSort: SelectOptions = [
  ...GeneralSort,
  { label: "По возрастанию", value: "asc" },
  { label: "По убыванию", value: "desc" },
];

export const BooleanSort: SelectOptions = [
  ...GeneralSort,
  { label: "Только правда", value: "true" },
  { label: "Только ложь", value: "false" },
];
