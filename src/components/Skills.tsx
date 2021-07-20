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

export const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-300">
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
    </div>
  );
};

// todo hover時に何で使ったかを表示
