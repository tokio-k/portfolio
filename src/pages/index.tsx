/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import { About } from "src/components/About";
import { Home } from "src/components/Home";
import { Skills } from "src/components/Skills";
import { Works } from "src/components/Works";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://qiita.com/api/v2/users/toki_k/items?per_page=100"
  );
  const data = await res.json();
  return {
    props: { data },
    revalidate: 60 * 60 * 24,
  };
};

const Index = ({ data }: any) => {
  return (
    <div className="text-center">
      <Home />
      <About />
      <Skills data={data} />
      <Works />
    </div>
  );
};

export default Index;
