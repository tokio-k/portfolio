import type { VFC } from "react";
import { Title } from "src/components/shared/Title";

const LONG_INTERN = [
  {
    companyName: "株式会社SNAPSHOT",
    skills: "Java、SpringBoot、jQuery、postgres、oracle",
    overview:
      "勤怠管理サービスの開発インターン。設計書を基に機能追加や改修の実装をしていました。フロントエンドから、バックエンド、DBまでの一連の流れを機能ごとに実装していました。",
    period: "2020/05~2021/03",
    doing: false,
  },
  {
    companyName: "株式会社OnePile",
    skills: "TypeScript、React、Next.js、Git",
    overview:
      "学生が起業したベンチャーで業務委託として開発。エンジニアは学生のみ(フロントエンド2人)。機能追加やSEO対策、パフォーマンス改善、バグ改修などフロントエンド開発全般を担当。",
    period: "2021/04~",
    doing: true,
  },
];

type CardType = {
  title: string;
  content: string;
};

const CardContent: VFC<CardType> = (props) => {
  return (
    <div className="flex">
      <span className="flex-none font-bold">{props.title}：</span>
      <div>{props.content}</div>
    </div>
  );
};

export const Works = () => {
  return (
    <div className="min-h-screen">
      <Title title="WORKS" />
      <div>
        <h4 className="font-bold text-lg py-3">
          就業型長期インターン&アルバイト
        </h4>
        <div className="flex flex-wrap place-content-around">
          {LONG_INTERN.map(
            ({ companyName, skills, overview, period, doing }, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    doing ? "border-2 border-red-500" : "border border-gray-300"
                  }
                          text-left bg-white p-5 w-full max-w-sm flex flex-col gap-y-3 m-5 shadow-md relative`}
                >
                  {doing && (
                    <div className="absolute top-0 right-0 text-red-500 p-2 font-bold">
                      所属中
                    </div>
                  )}
                  <CardContent title="会社名" content={companyName} />
                  <CardContent title="期間" content={period} />
                  <CardContent title="概要" content={overview} />
                  <CardContent title="使用技術" content={skills} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
