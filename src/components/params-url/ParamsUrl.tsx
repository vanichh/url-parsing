import s from "./ParamsUrl.module.scss";
import { NameParams } from "./components/name-params/NameParams";
import { useStore } from "@store";

export const ParamsUrl = () => {
  const url = useStore((store) => store.url);

  if (url === null) return null;

  return (
    <article className={s.root}>
      <NameParams name="hash" value={url.hash} />
      <NameParams name="host" value={url.host} />
      <NameParams name="hostname" value={url.hostname} />
      <NameParams name="href" value={url.href} />
      <NameParams name="origin" value={url.origin} />
      <NameParams name="password" value={url.password} />
      <NameParams name="pathname" value={url.pathname} />
      <NameParams name="port" value={url.port} />
      <NameParams name="protocol" value={url.protocol} />
      <NameParams name="search" value={url.search} />
    </article>
  );
};
