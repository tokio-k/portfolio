import type { RefObject, VFC } from "react";
import { useEffect } from "react";
import { useState } from "react";

type Props = {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  worksRef: RefObject<HTMLDivElement>;
};

type HeaderMenuType = {
  title: string;
  ref: RefObject<HTMLDivElement>;
  offset: number;
  nextOffset: number;
}[];

export const Header: VFC<Props> = ({
  homeRef,
  aboutRef,
  skillsRef,
  worksRef,
}) => {
  const [homeOffsetTop, setHomeOffsetTop] = useState<number>(-1);
  const [aboutOffsetTop, setAboutOffsetTop] = useState<number>(-1);
  const [skillsOffsetTop, setSkillsOffsetTop] = useState<number>(-1);
  const [worksOffsetTop, setWorksOffsetTop] = useState<number>(-1);
  useEffect(() => {
    setHomeOffsetTop(homeRef.current?.offsetTop ?? -1);
    setAboutOffsetTop(aboutRef.current?.offsetTop ?? -1);
    setSkillsOffsetTop(skillsRef.current?.offsetTop ?? -1);
    setWorksOffsetTop(worksRef.current?.offsetTop ?? -1);
  }, [homeRef, aboutRef, skillsRef, worksRef]);
  const scrollTop = (): number => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  };
  const [position, setPosition] = useState<number>(0);
  const onScroll = (): void => {
    const scrollPosition = scrollTop();
    setPosition(scrollPosition);
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => {
      return document.removeEventListener("scroll", onScroll);
    };
  });
  const HEADER_MENU_LIST: HeaderMenuType = [
    {
      title: "Home",
      ref: homeRef,
      offset: homeOffsetTop,
      nextOffset: aboutOffsetTop,
    },
    {
      title: "About",
      ref: aboutRef,
      offset: aboutOffsetTop,
      nextOffset: skillsOffsetTop,
    },
    {
      title: "Skills",
      ref: skillsRef,
      offset: skillsOffsetTop,
      nextOffset: worksOffsetTop,
    },
    {
      title: "Works",
      ref: worksRef,
      offset: worksOffsetTop,
      nextOffset: 99999999,
    },
  ];
  return (
    <ul className="fixed w-full top-0 flex place-content-around py-6 md:text-lg font-bold z-10">
      {HEADER_MENU_LIST.map(({ title, ref, offset, nextOffset }) => {
        const handleClick = () => {
          ref.current?.scrollIntoView({
            behavior: "smooth",
          });
        };
        return (
          <li key={title}>
            <button
              onClick={handleClick}
              className={`${
                position >= offset && position < nextOffset
                  ? " text-shadow-black text-white border border-gray-600 rounded-md bg-yellow-100 bg-opacity-80"
                  : "text-shadow-white"
              } py-1 px-3 font-bold`}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
