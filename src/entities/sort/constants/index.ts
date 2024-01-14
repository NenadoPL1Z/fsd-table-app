import { SelectOptions } from "@/shared/types";

const GeneralSort: SelectOptions = [
  { label: "По умолчанию", value: { type: "general", value: "" } },
];

export const StringSort: SelectOptions = [
  ...GeneralSort,
  { label: "По возрастанию", value: { type: "number", value: "asc" } },
  { label: "По убыванию", value: { type: "number", value: "desc" } },
];

export const NumberSort: SelectOptions = [
  ...GeneralSort,
  { label: "По возрастанию", value: { type: "string", value: "asc" } },
  { label: "По убыванию", value: { type: "string", value: "desc" } },
];

export const BooleanSort: SelectOptions = [
  ...GeneralSort,
  { label: "Только правда", value: { type: "boolean", value: "true" } },
  { label: "Только ложь", value: { type: "boolean", value: "false" } },
];
