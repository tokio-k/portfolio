import type { VFC } from "react";

type Props = {
  title: string;
};

export const Title: VFC<Props> = (props) => {
  return <h2 className="text-6xl py-10 font-serif">{props.title}</h2>;
};
