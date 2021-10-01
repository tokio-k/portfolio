import type { VFC } from "react";
import { Title } from "src/components/shared/Title";

type SkillsType = {
  title: string;
  period: string;
  overview: string;
}[];

const SKILLS: SkillsType = [
  {
    title: "Java、SpringBoot",
    period: "1年",
    overview:
      "株式会社SNAPSHOTやサイボウズ株式会社のインターンで使用。初めて学んだ言語。",
  },
  {
    title: "TypeScript、React",
    period: "半年",
    overview:
      "現在一番好きな言語。株式会社OnePileや株式会社エイチームでの開発で使用。",
  },
  {
    title: "Ruby、Rails",
    period: "1ヶ月",
    overview: "株式会社エイチームでの開発で使用。",
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
  let itemsCount = 0;
  if (data) {
    data.map((item: any) => {
      likesCount += item.likes_count;
    });
    itemsCount = data[0].user.items_count;
  }

  return (
    <div className="min-h-screen">
      <Title title={"SKILLS"} />
      <ul className="flex place-content-around flex-wrap">
        {SKILLS.map((skill) => {
          return (
            <div
              key={skill.title}
              className="border-red-600 border-2 rounded-lg w-80  box-content m-4 font-bold"
            >
              <div className="bg-red-500 flex py-5 rounded-t-md">
                <p className="flex-auto text-lg">{skill.title}</p>
                <p className="flex-none mr-5">歴：{skill.period}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-b-md h-24 text-left">
                <p>{skill.overview}</p>
              </div>
            </div>
          );
        })}
      </ul>
      <div className="flex place-content-around flex-wrap mt-16">
        <div className="bg-yellow-400 w-80 p-3 font-bold shadow-md my-2">
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
        <div className="bg-qiita-green w-80 p-3 font-bold shadow-md my-2">
          <p className="text-3xl pb-1">Qiita</p>
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
