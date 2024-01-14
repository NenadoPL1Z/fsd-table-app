import { Header } from "@/widget/header";
import { Main } from "@/widget/main";
import { useMainPage } from "./useMainPage";
import { StatusWrapper } from "@/feature/layout";

export function MainPage() {
  const { loadData, isLoading, isError, tableInfo } = useMainPage();

  return (
    <StatusWrapper isLoading={isLoading} error={{ isError, onRetry: loadData }}>
      <Header />
      {tableInfo && <Main rows={tableInfo} />}
    </StatusWrapper>
  );
}
