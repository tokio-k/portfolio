/* eslint-disable no-console */
import type { GetStaticProps } from "next";
import { createRef } from "react";
import { About } from "src/components/About";
import { Header } from "src/components/Header";
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
  const homeRef = createRef<HTMLDivElement>();
  const aboutRef = createRef<HTMLDivElement>();
  const skillsRef = createRef<HTMLDivElement>();
  const worksRef = createRef<HTMLDivElement>();
  return (
    <div className="text-center">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        worksRef={worksRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills data={data} />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div className="h-36" />
    </div>
  );
};

export default Index;
