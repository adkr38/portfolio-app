import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

function Hero() {
  const pLight: string =
    "animate-fadeIn font-cmu-it  text-center break-words text-sm sm:text-md md:text-lg ";
  const pDark: string =
    "animate-fadeIn text-slate-200 font-cmu-it text-center break-words text-sm sm:text-md md:text-lg ";
  const spanLight: string =
    "animate-fadeIn font-cmu text-center break-words text-sm sm:text-md md:text-lg ";
  const spanDark: string =
    "animate-fadeIn font-cmu text-slate-200 text-center break-words text-sm sm:text-md md:text-lg ";

  const { theme } = useContext(ThemeContext);

  return (
    <div
      key={theme}
      className="animate-fadeIn -mt-16 sm:mt-0 p-10 pb-0 flex justify-center items-center align-middle"
    >
      <div className="animate-fadeIn grid grid-cols-2 grid-rows-2 items-center justify-center w-full h-[40rem] sm:w-2/3">
        <img
          className="justify-self-center col-start-1 col-end-2  row-start-1 row-end-2 w-64 rounded-[5rem] animate-fadeIn"
          src="./myself.png"
        />
        <p
          className={
            (theme === "light" ? pLight : pDark).replace(
              "font-cmu-it",
              "font-cmu"
            ) +
            // .replace("text-center", "text-left") +
            "col-start-2 col-end-3 row-start-1 row-end-2 w-74"
          }
        >
          Hello! I'm Adrián Kronewitter Rufino, from Tenerife, Canary Islands.
          I'm currently working at Amazon in Barcelona as a Network Flow
          Specialist, doing internal tooling with python & analytics work.
        </p>
        <p
          className={
            (theme === "light" ? pLight : pDark) +
            "row-start-2 col-start-1  col-end-3 text-center -mt-16 sm:mt-0"
          }
        >
          <span className={theme === "light" ? spanLight : spanDark}>
            Skills:
          </span>
          <ol>
            <li>
              <p className={theme === "light" ? pLight : pDark}>
                {" "}
                <span className={theme === "light" ? spanLight : spanDark}>
                  JS:
                </span>{" "}
                React, React Router, Tailwindcss, NextJS, OOP.
              </p>
            </li>
            <li>
              <p className={theme === "light" ? pLight : pDark}>
                <span className={theme === "light" ? spanLight : spanDark}>
                  Python:
                </span>{" "}
                Pandas, Visualization, Sklearn, PySimpleGUI, Bs4, XlWings, OOP.
              </p>
            </li>
            <li>
              <p className={theme === "light" ? pLight : pDark}>
                <span className={theme === "light" ? spanLight : spanDark}>
                  Java:
                </span>{" "}
                SpringBoot, JPA, JUnit, OOP.
              </p>
            </li>

            <li>
              <p className={theme === "light" ? pLight : pDark}>
                <span className={theme === "light" ? spanLight : spanDark}>
                  Go:
                </span>{" "}
                General language knowledge.
              </p>
            </li>
            <li>
              <p className={theme === "light" ? pLight : pDark}>
                <span className={theme === "light" ? spanLight : spanDark}>
                  Other:
                </span>{" "}
                Html/Css, SQL, Vim, Tableau.
              </p>
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Hero;
