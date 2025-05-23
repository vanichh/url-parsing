import { useStore } from "@store";

export const GetParamsUrl = () => {
  const valueUrl = useStore((store) => store.valueUrl);

  const paramsUrl = [...new URLSearchParams(valueUrl)];

  console.log("paramsUrl", paramsUrl);

  if (paramsUrl.length <= 1) {
    return <p>Get параметров в url не найденно</p>;
  }

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
