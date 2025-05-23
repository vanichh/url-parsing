import { ErrorParsing } from "@components/error-parsing";
import { FormParsing } from "@components/form-parsing";
import { BaseLayout } from "../../layouts/base-layout";
import { useStore } from "@store";
import s from "./HomePage.module.scss";
import { UrlInfo } from "./components/url-info";

export const HomePage = () => {
  const isError = useStore((store) => store.isError);

  return (
    <BaseLayout>
      <div className={s.root}>
        <h1 className={s.root__title}>Парсинг url</h1>
        <FormParsing />
        {isError ? <ErrorParsing /> : <UrlInfo />}
      </div>
    </BaseLayout>
  );
};
