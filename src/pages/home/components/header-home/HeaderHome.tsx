import { useStore } from "@store";
import s from "./HeaderHome.module.scss";

export const HeaderHome = () => {
  const valueUrl = useStore((store) => store.valueUrl);

  return (
    <header className={s.root}>
      <h1 className={s.root__title}>Парсинг url</h1>
      <p className={s.root__subtitle}>{valueUrl ? "Нажмите распарсить как закончите ввод" : "Начните воодить url"}</p>
    </header>
  );
};
