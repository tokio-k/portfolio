import { Title } from "src/components/shared/Title";

export const About = () => {
  return (
    <div className="bg-gray-400 text-white min-h-screen flex flex-col">
      <Title title={"ABOUT"} />
      <div className="flex place-content-center items-center flex-auto pb-40 font-bold sm:text-xl ">
        {/* todo image作成 */}
        <div>
          <p>愛知県の文系大学3年生です。</p>
          <p>大学1年生の時にプログラミングを始め</p>
          <p>勤怠サービス開発の長期インターンを経験後、</p>
          <p>今はベンチャー企業でエンジニアをしています。</p>
          <div className="h-7" />
          <p>
            高校生の時はハンドボールに熱中しており、
            <br />
            インターハイ全国3位の経験もあります。
          </p>
        </div>
      </div>
    </div>
  );
};
