import type { FunctionComponent } from "preact";
type Props = {
  url: string;
};
export const Button: FunctionComponent<Props> = ({ url }) => {
  const fetchHelloWorld = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(JSON.stringify(response));
    }
    const result = await response.text();
    console.log(result);
  };

  return (
    <button type='button' onClick={() => fetchHelloWorld()}>
      {url}
    </button>
  );
};
