import type { NameParamsProps } from "./types";
import s from "./NameParams.module.scss";
import cn from "classnames";
import { CopyIcon } from "@common/icons/copy";
import { useStore } from "@store";

export const NameParams = ({ name, value }: NameParamsProps) => {
  const setValueNotification = useStore((store) => store.setValueNotification);

  const onClickCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setValueNotification("Cкопировано");
  };

  return (
    <section className={s.root}>
      <p className={cn(s.root__text, s.root__text_name)}>{name}</p>
      <p title={value ?? undefined} className={cn(s.root__text, s.root__text_value)}>
        {value || "-"}
      </p>
      {value && (
        <button className={s.root__button} onClick={() => onClickCopy(value)}>
          <CopyIcon />
        </button>
      )}
    </section>
  );
};
