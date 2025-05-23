import { useStore } from "@store";

export const GetParamsUrl = () => {
  const valueUrl = useStore((store) => store.valueUrl);

  const paramsUrl = [...new URLSearchParams(valueUrl)];

  console.log("paramsUrl", paramsUrl);

  return (
    <section>
      {paramsUrl.map(([key, value]) => (
        <>
          <div>{key}</div>
          <div>{value}</div>
        </>
      ))}
    </section>
  );
};
