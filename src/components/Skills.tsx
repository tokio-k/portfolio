import type { VFC } from "react";
import { Title } from "src/components/shared/Title";

type SkillsType = {
  title1: string;
  title2: string;
  period: string;
}[];

const SKILLS: SkillsType = [
  {
    title1: "Java",
    title2: "Spring Boot",
    period: "1年",
  },
  {
    title1: "Oracle",
    title2: "PostgreSQL",
    period: "1年",
  },
  {
    title1: "React",
    title2: "TypeScript",
    period: "半年",
  },
  {
    title1: "Git",
    title2: "",
    period: "半年",
  },
];

const QUALIFICATION = [
  "ITパスポート",
  "基本情報技術者試験",
  "Java Silver",
  "Oracle Silver",
  "LPIC L2",
  "UMTP L1",
];

type Props = {
  data: any;
};

export const Skills: VFC<Props> = ({ data }) => {
  let likesCount = 0;
  data.map((item: any) => {
    likesCount += item.likes_count;
  });

  const itemsCount = data[0].user.items_count;

  return (
    <div className="min-h-screen py-10  bg-gradient-to-b from-yellow-500 via-yellow-500 to-red-500">
      <Title title={"SKILLS"} />
      <ul className="flex place-content-around flex-wrap">
        {SKILLS.map((skill) => {
          return (
            <div
              key={skill.title1}
              className="shadow-xl border border-red-600 bg-red-500 rounded-full w-60 h-60 flex flex-col place-content-center box-content m-4 font-bold text-white"
            >
              <p></p>
              <p className="text-3xl">{skill.title1}</p>
              <p className="text-3xl pb-5">{skill.title2}</p>
              <p className="text-xl">{skill.period}</p>
            </div>
          );
        })}
      </ul>
      <div className="flex place-content-around flex-wrap mt-16">
        <div className="bg-yellow-400 w-80 p-3 font-bold border border-yellow-700 shadow-md my-2">
          <p className="text-3xl pb-3">保有資格</p>
          <ul>
            {QUALIFICATION.map((item) => {
              return (
                <li key={item} className="py-1 text-lg">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-qiita-green w-80 p-3 font-bold border border-yellow-700 shadow-md my-2">
          <p className="text-3xl pb-1">Qiita</p>
          <p>
            <span className="pr-2">→</span>
            <a className="text-blue-500" href="https://qiita.com/toki_k">
              https://qiita.com/toki_k
            </a>
          </p>
          <ul className="text-2xl flex flex-col h-40 place-content-around">
            <li>記事数：{itemsCount} </li>
            <li>総LGTM：{likesCount}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// todo hover時に何で使ったかを表示
