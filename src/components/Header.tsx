import type { RefObject, VFC } from "react";

type Props = {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  worksRef: RefObject<HTMLDivElement>;
};

export const Header: VFC<Props> = (props) => {
  const HEADER_MENU_LIST = [
    {
      title: "Home",
      ref: props.homeRef,
    },
    {
      title: "About",
      ref: props.aboutRef,
    },
    {
      title: "Skills",
      ref: props.skillsRef,
    },
    {
      title: "Works",
      ref: props.worksRef,
    },
  ];
  return (
    <ul className="fixed w-full top-0 flex place-content-around py-6 md:text-lg font-bold z-10">
      {HEADER_MENU_LIST.map(({ title, ref }) => {
        const handleClick = () => {
          ref.current?.scrollIntoView({
            behavior: "smooth",
          });
        };
        return (
          <li key={title}>
            <button onClick={handleClick} className="text-shadow-white">
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
