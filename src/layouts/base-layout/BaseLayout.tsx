import type { BaseLayoutProps } from "./types";
import s from "./BaseLayout.module.scss";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <main className={s.root}>{children}</main>;
};
