import { useStore } from "@store";
import s from "./Notification.module.scss";
import cn from "classnames";
import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

const rootNotification = document.getElementById("root__notification")!;

export const Notification = () => {
  const ref = useRef<HTMLElement>(null);

  const { typeNotification, valueNotification, setValueNotification } = useStore();

  useLayoutEffect(() => {
    const elem = ref.current;
    let idTimeout: NodeJS.Timeout;

    if (valueNotification !== "" && elem) {
      elem.style.opacity = "1";
      idTimeout = setTimeout(() => {
        elem.style.opacity = "0";
        setTimeout(() => {
          setValueNotification("");
        }, 300);
      }, 1000);
    }

    return () => {
      clearTimeout(idTimeout);
    };
  }, [setValueNotification, valueNotification]);

  return createPortal(
    <article ref={ref} className={cn(s.root, s[typeNotification])}>
      <p className={s.root__title}>{valueNotification}</p>
    </article>,
    rootNotification
  );
};
