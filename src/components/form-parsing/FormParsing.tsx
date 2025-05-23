import { useStore } from "@store";
import type { OnChangeType, OnSubmitType } from "./types";
import s from "./FormParsing.module.scss";

export const FormParsing = () => {
  const { isError, setIsError, setValueUrl, valueUrl, setUrl, setErrorValue } = useStore();

  const onChange: OnChangeType = ({ target }) => {
    setValueUrl(target.value);
  };

  const onSubmit: OnSubmitType = (e) => {
    e.preventDefault();

    try {
      const newUrl = new URL(valueUrl);
      setUrl(newUrl);

      if (isError) {
        setIsError(false);
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrorValue(e.message);
      }

      setIsError(true);
    }
  };

  return (
    <form className={s.root} onSubmit={onSubmit}>
      <input className={s.root__input} value={valueUrl} onChange={onChange} />
      <button className={s.root__button} type="submit">
        Распарсить
      </button>
    </form>
  );
};
