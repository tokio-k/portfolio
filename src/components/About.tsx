import Image from "next/image";
import { Title } from "src/components/shared/Title";

type MyPageType = {
  title: string;
  link: string;
}[];

const MYPAGE_ITEM: MyPageType = [
  {
    title: "Qiita",
    link: "https://qiita.com/toki_k",
  },
  {
    title: "GitHub",
    link: "https://github.com/tokio-k",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/KoikeTokio",
  },
];

export const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center">
      <Title title={"ABOUT"} />

      <div className="justify-center flex-auto flex flex-col mb-10 bg-gray-200 py-5 px-2 mx-3 rounded-lg max-w-lg md:max-w-2xl border">
        <div className="flex place-content-center font-bold sm:text-xl flex-col md:flex-row gap-8">
          <div className="">
            <Image
              src="/profile.jpg"
              width="200"
              height="200"
              className="rounded-full"
            />
          </div>
          <div className="text-left">
            <p>愛知県の文系大学3年生です。</p>
            <p>
              大学1年生の時にプログラミングを始め、
              勤怠サービス開発のインターンを経験し、
              現在はベンチャー企業でエンジニアをしております。
            </p>
            <div className="h-7" />
            <p>
              高校生の時はハンドボールに力を入れており、
              インターハイ全国3位の経験もあります。
            </p>
          </div>
        </div>
        <div className="mt-3 mx-auto text-left">
          <ol>
            {MYPAGE_ITEM.map(({ title, link }) => {
              return (
                <li key={title}>
                  {title} -{" "}
                  <a href={link} className="text-blue-500">
                    {link}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
