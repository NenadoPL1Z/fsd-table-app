import { TableArr } from "@/shared/model";

interface MainProps {
  info: TableArr;
}
export const Main = ({ info }: MainProps) => {
  return <main>{JSON.stringify(info)}</main>;
};
