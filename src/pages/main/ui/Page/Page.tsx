import { Header } from "@/widget/header";
import { Main } from "@/widget/main";
import { TableArr } from "@/shared/model";
import { useMainPage } from "./useMainPage";
import { StatusWrapper } from "@/feature/layout";

export function MainPage() {
  const { loadData, isLoading, isError, tableInfo } = useMainPage();

  return (
    <StatusWrapper isLoading={isLoading} error={{ isError, onRetry: loadData }}>
      <Header />
      <Main info={tableInfo as TableArr} />
    </StatusWrapper>
  );
}
