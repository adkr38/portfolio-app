import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

interface IProject {
  title: string;
  theme: string;
  paragraph: string;
  link: string;
}

function Project(props: IProject): JSX.Element {
  const pLight = "font-cmu text-md sm:text-lg text-slate-700  ";
  const pDark = "font-cmu text-md sm:text-lg text-slate-200  ";
  const aLight =
    "relative inline-block font-cmu-it text-md sm:text-lg text-slate-900 group ";
  const aDark =
    "relative inline-block font-cmu-it text-md sm:text-lg text-slate-50 group ";
  const h3Light = "font-cmu text-2xl text-slate-900  ";
  const h3Dark = "font-cmu text-2xl text-slate-50 ";

  const linkHoverLight =
    "absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-slate-400 transform origin-right scale-x-0 duration-500 ease-out group-hover:scale-x-100 ";

  const linkHoverDark =
    "absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-slate-200 transform origin-right scale-x-0  duration-500 ease-out group-hover:scale-x-100";

  return (
    <div className="break-all w-full grid gap-y-3">
      <h3 className={props.theme === "light" ? h3Light : h3Dark}>
        {props.title}
      </h3>
      <p className={props.theme === "light" ? pLight : pDark}>
        {props.paragraph}
      </p>
      <a target="_blank" href={props.link}>
        <span className={props.theme === "light" ? aLight : aDark}>
          {props.link}
          <span
            className={props.theme === "light" ? linkHoverLight : linkHoverDark}
          ></span>
        </span>
      </a>
    </div>
  );
}

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="grid gap-y-8 auto-cols-fr sm:px-32 px-12 py-6">
      <Project
        theme={theme}
        title="Golang naive API *(Current project I'm working on)"
        paragraph="Personal project aiming to create a soccer API with MySql & native go, making player & team data available."
        link="https://github.com/adkr38/native-api-soccer"
      />

      <Project
        theme={theme}
        title="Software Insight"
        paragraph="Interactive site designed for having fun with programming language data, just a demo project focusing heavily on Css & React fundamentals. Stack: React, Jsx, Tailwindcss."
        link="https://software-insight.netlify.app/"
      />

      <Project
        theme={theme}
        title="Soccer Similarity"
        paragraph="Data Science Masters final project, uses K-Means & average distance to scout players based on their similarity to an input player, also provides normalized-stat similarity, distance visualization & cluster analytics. Stack: Python, Sklearn, Seaborn, Plotly, XlWings."
        link="https://github.com/adkr38/soccer_player_recommender_system_iebs"
      />

      <Project
        theme={theme}
        title="International Chatroom"
        paragraph="Demo project, resembles a chatting website with multiple city-rooms available, has a cool slider on top to pick your city. Stack: Js, Html, Css & Google Firestore."
        link="https://github.com/adkr38/InternationalChatroom"
      />

      <Project
        theme={theme}
        title="Amazon review scraper"
        paragraph="Multithreaded python application for scraping user reviews from amazon products based on a product id (ASIN). Stack: Python, PySimpleGUI, Bs4."
        link="https://github.com/adkr38/amazon_review_scraper"
      />
    </div>
  );
}

export default Projects;
