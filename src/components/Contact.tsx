import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import * as ai from "react-icons/ai";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const iconLight: string = "animate-fadeIn text-5xl rounded-[5rem]";
  const iconDark: string =
    "text-slate-200 animate-fadeIn text-5xl rounded-[5rem]";

  const containerLight: string =
    "m-auto mt-52 lg:mt-64 p-7 px-42 sm:px-7 flex justify-around align-middle text-center items-center  shadow-slate-400 shadow-md sm:w-2/3 w-3/4 gap-5 sm:gap-0 lg:w-1/2 bg-slate-50 rounded-full duration-500";

  const containerDark: string =
    "m-auto mt-52 lg:mt-64 p-7 px-42 sm:px-7 flex justify-around align-middle text-center items-center shadow-slate-600 shadow-md sm:w-2/3 w-3/4 gap-5 sm:gap-0 lg:w-1/2 bg-slate-700 rounded-full duration-500";
  const buttonLight: string =
    "p-2 rounded-[3rem] shadow-md shadow-slate-400 active:shadow-inner active:shadow-slate-300 transition duration-500";
  const buttonDark: string =
    "bg-slate-700/75 p-2 rounded-[3rem] shadow-md shadow-slate-900 active:shadow-inner active:shadow-slate-900 transitionduration-500";

  return (
    <div
      key={theme}
      className={theme === "light" ? containerLight : containerDark}
    >
      <a
        className={theme === "light" ? buttonLight : buttonDark}
        href="https://github.com/adkr38"
        target="_blank"
      >
        <ai.AiFillGithub
          className={theme === "light" ? iconLight : iconDark}
        ></ai.AiFillGithub>
      </a>
      <a
        className={theme === "light" ? buttonLight : buttonDark}
        href="https://www.linkedin.com/in/adri%C3%A1n-k-r"
        target="_blank"
      >
        <ai.AiFillLinkedin
          className={theme === "light" ? iconLight : iconDark}
        ></ai.AiFillLinkedin>
      </a>
      <a
        className={theme === "light" ? buttonLight : buttonDark}
        href="mailto:adriankr38@gmail.com?subject=Mail Inquiry&Body=Hello Adrian!"
      >
        <ai.AiFillMail
          className={theme === "light" ? iconLight : iconDark}
        ></ai.AiFillMail>
      </a>
    </div>
  );
}

export default Contact;
