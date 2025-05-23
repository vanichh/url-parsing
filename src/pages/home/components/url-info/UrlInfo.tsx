import { useStore } from "@store";
import s from "./UrlInfo.module.scss";
import { ParamsUrl } from "@components/params-url";
import { GetParamsUrl } from "@components/get-params-url";

export const UrlInfo = () => {
  const url = useStore((store) => store.url);

  if (url === null) return null;

  return (
    <section className={s.root}>
      <ParamsUrl />
      <GetParamsUrl />
    </section>
  );
};
