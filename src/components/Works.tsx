import type { VFC } from "react";
import { Title } from "src/components/shared/Title";

type WorkList = {
  companyName: string;
  period: string;
  overview: string;
  skills: string;
  doing: boolean;
}[];

const LONG_INTERN: WorkList = [
  {
    companyName: "株式会社SNAPSHOT",
    period: "2020/05~2021/03",
    overview:
      "勤怠管理サービスの開発インターン。設計書を基に機能追加や改修の実装をしていました。フロントエンドから、バックエンド、DBまでの一連の流れを機能ごとに実装していました。",
    skills: "Java、SpringBoot、jQuery、postgres、oracle",
    doing: false,
  },
  {
    companyName: "株式会社OnePile",
    period: "2021/04~",
    overview:
      "学生が起業したベンチャーで業務委託として開発。エンジニアは学生のみ(フロントエンド2人)。機能追加やSEO対策、パフォーマンス改善、バグ改修などフロントエンド開発全般を担当。",
    skills: "TypeScript、React、Next.js、Git",
    doing: true,
  },
  {
    companyName: "株式会社エイチーム",
    period: "2021/09~",
    overview:
      "長期インターンシップとして週3日程勤務。中でもincrements株式会社のプロダクトの開発をしている",
    skills: "TypeScript、React、Ruby、Git",
    doing: true,
  },
];

const SHORT_INTERN: WorkList = [
  {
    companyName: "サイボウズ株式会社",
    period: "2021/08/23~2021/08/27",
    overview:
      "1週間のサマーインターン。参加学生6名。サイボウズ株式会社が提供するkintoneを題材として、新機能のプロトタイプを開発。",
    skills: "Java、JavaScript",
    doing: false,
  },
];

type CardContentType = {
  title: string;
  content: string;
};

const WorkCardContent: VFC<CardContentType> = (props) => {
  return (
    <div className="flex">
      <span className="flex-none font-bold">{props.title}：</span>
      <div>{props.content}</div>
    </div>
  );
};

type CardType = {
  companyName: string;
  period: string;
  overview: string;
  skills: string;
  doing: boolean;
};

const WorkCard: VFC<CardType> = ({
  companyName,
  period,
  overview,
  skills,
  doing,
}) => {
  return (
    <div
      className={`${
        doing ? "border-2 border-red-500" : "border border-gray-300"
      }
      text-left bg-gray-50 p-5 w-full max-w-sm flex flex-col gap-y-3 shadow-md relative`}
    >
      {doing && (
        <div className="absolute top-0 right-0 text-red-500 p-2 font-bold">
          所属中
        </div>
      )}
      <WorkCardContent title="会社名" content={companyName} />
      <WorkCardContent title="期間" content={period} />
      <WorkCardContent title="概要" content={overview} />
      <WorkCardContent title="使用技術" content={skills} />
    </div>
  );
};

type CardListType = {
  title: string;
  workList: WorkList;
};

const WorkCardList: VFC<CardListType> = ({ title, workList }) => {
  return (
    <div className="mb-5">
      <h3 className="font-bold text-lg py-3 text-shadow-white">{title}</h3>
      <div className="flex flex-wrap place-content-around">
        {workList.map((work, i) => {
          return (
            <div key={i} className="m-5">
              <WorkCard
                companyName={work.companyName}
                period={work.period}
                overview={work.overview}
                skills={work.skills}
                doing={work.doing}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Works = () => {
  return (
    <div className="min-h-screen">
      <Title title="WORKS" />
      <WorkCardList
        title="就業型長期インターン&アルバイト"
        workList={LONG_INTERN}
      />
      <WorkCardList title="短期/中期インターンシップ" workList={SHORT_INTERN} />
    </div>
  );
};
