import { useStore } from "@store";
import s from "./GetParamsUrl.module.scss";
import { NameParams } from "@components/params-url/components/name-params/NameParams";

export const GetParamsUrl = () => {
  const valueUrl = useStore((store) => store.valueUrl);

  const paramsUrl = [...new URLSearchParams(valueUrl)];
  paramsUrl.shift();

  const title = paramsUrl.length <= 1 ? "Get параметров не найденно" : "Get парамметры";

  return (
    <section className={s.root}>
      <p className={s.root__title}>{title}</p>
      {paramsUrl.map(([key, value]) => (
        <NameParams key={key} name={key} value={value} />
      ))}
    </section>
  );
};
