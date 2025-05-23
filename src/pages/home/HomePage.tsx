import { ErrorParsing } from "@components/error-parsing";
import { FormParsing } from "@components/form-parsing";
import { BaseLayout } from "../../layouts/base-layout";
import { useStore } from "@store";
import s from "./HomePage.module.scss";
import { UrlInfo } from "./components/url-info";
import { HeaderHome } from "./components/header-home";

export const HomePage = () => {
  const isError = useStore((store) => store.isError);

  return (
    <BaseLayout>
      <div className={s.root}>
        <HeaderHome />
        <FormParsing />
        {isError ? <ErrorParsing /> : <UrlInfo />}
      </div>
    </BaseLayout>
  );
};
