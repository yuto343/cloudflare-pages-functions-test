import type { FunctionComponent } from "preact";
type Props = unknown;
export const Button: FunctionComponent<Props> = () => (
  <button type='button' onClick={() => fetchHelloWorld()}>
    fetch
  </button>
);

const fetchHelloWorld = async () => {
  const response = await fetch("/helloworld");
  if (!response.ok) {
    throw new Error(JSON.stringify(response));
  }
  const result = await response.text();
  console.log(result);
};
