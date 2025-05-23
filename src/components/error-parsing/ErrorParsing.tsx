import { useStore } from "@store";
import s from "./ErrorParsing.module.scss";

export const ErrorParsing = () => {
  const errorValue = useStore((store) => store.errorValue);

  return (
    <article className={s.root}>
      <h2 className={s.root__title}>Oшибка парсинга адреса страницы</h2>
      <pre className={s.root__error}>
        <code>{errorValue}</code>
      </pre>
    </article>
  );
};
