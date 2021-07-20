import { Title } from "src/components/shared/Title";
import useSWR from "swr";

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

export const Skills = () => {
  const { data, error } = useSWR(
    "https://qiita.com/api/v2/users/toki_k/items?per_page=100"
  );

  let likesCount = 0;
  const itemsCount = data[0].user.items_count;

  if (!error && data) {
    data.map((item: any) => {
      likesCount += item.likes_count;
    });
  }

  return (
    <div className="min-h-screen bg-gray-200 py-10">
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
        <div className="bg-white w-80 p-3 font-bold border border-gray-300 shadow-md my-2">
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
        <div className="bg-white w-80 p-3 font-bold border border-gray-300 shadow-md my-2">
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
