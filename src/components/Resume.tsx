import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import React from "react";
import * as io from "react-icons/io";

const pLight = "font-cmu text-sm sm:text-md text-slate-700  ";
const pDark = "font-cmu text-sm sm:text-md text-slate-200  ";
const titleLight = "text-lg sm:text-xl text-slate-900 font-cmu";
const titleDark = "text-lg sm:text-xl text-slate-50 font-cmu";
const italicPLight = "font-cmu-it text-xs sm:texs-sm text-slate-700";
const italicPDark = "font-cmu-it text-xs sm:texs-sm text-slate-200";
const hrLight = "my-1 border-slate-900 ";
const hrDark = "my-1 border-slate-200";
const flexCol = "flex flex-col align-middle justify-center";
const flexRow = "flex flex-row align-middle list-disc";
const flexRowBetween = "flex flex-row align-middle justify-between list-disc";
const listDiscLight = "w-1 h-1 mt-2 mr-2 rounded-full bg-gray-500";
const listDiscDark = "w-1 h-1 mt-2 mr-2 rounded-full bg-slate-50";

interface IInlineDescription {
  theme: string;
  title: string;
  content: string;
}

interface IEducation {
  theme: string;
  educationCenter: string;
  educationTitle: string;
  educationLocation: string;
  educationDurationPeriod: string;
}
interface ICvDescription {
  title: string;
  theme: string;
}

interface IJobDescription {
  theme: string;
  jobCompany: string;
  jobTitle: string;
  jobLocation: string;
  jobTimeInterval: string;
}

interface IParagraph {
  theme: string;
  content: string | null | undefined;
}

function InlineDescription(props: IInlineDescription) {
  return (
    <div className={flexRow + " gap-x-2"}>
      <span
        className={props.theme === "light" ? listDiscLight : listDiscDark}
      ></span>
      <p
        className={
          props.theme === "light"
            ? pLight.replace("text-slate-700", "text-slate-900")
            : pDark.replace("text-slate-200", "text-slate-50")
        }
      >
        {props.title}
      </p>
      <p className={props.theme === "light" ? pLight : pDark}>
        {"  " + props.content}
      </p>
    </div>
  );
}

function Education(props: IEducation) {
  return (
    <ul>
      <li className={flexRowBetween}>
        <div className={flexCol + " py-2"}>
          <p
            className={
              props.theme === "light"
                ? pLight.replace("text-slate-700", "text-slate-900")
                : pDark.replace("text-slate-200", "text-slate-50")
            }
          >
            {props.educationCenter}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.educationTitle}
          </p>
        </div>
        <div className={flexCol}>
          <p className={props.theme === "light" ? pLight : pDark}>
            {props.educationLocation}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.educationDurationPeriod}
          </p>
        </div>
      </li>
    </ul>
  );
}

function CvTitle(props: ICvDescription) {
  return (
    <React.Fragment>
      <h2 className={props.theme === "light" ? titleLight : titleDark}>
        {props.title}
      </h2>
      <hr className={props.theme === "light" ? hrLight : hrDark} />
    </React.Fragment>
  );
}

function JobDescription(props: IJobDescription) {
  return (
    <ul>
      <li className={flexRowBetween}>
        <div className={flexCol + " py-2"}>
          <p
            className={
              props.theme === "light"
                ? pLight.replace("text-slate-700", "text-slate-900")
                : pDark.replace("text-slate-200", "text-slate-50")
            }
          >
            {props.jobCompany}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.jobTitle}
          </p>
        </div>
        <div className={flexCol}>
          <p className={props.theme === "light" ? pLight : pDark}>
            {props.jobLocation}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.jobTimeInterval}
          </p>
        </div>
      </li>
    </ul>
  );
}
function Paragraph(props: IParagraph) {
  return (
    <li className="flex items-start list-inside py-1 pl-6 sm:pl-12">
      <span
        className={props.theme === "light" ? listDiscLight : listDiscDark}
      ></span>
      <p className={(props.theme === "light" ? pLight : pDark) + " w-4/5"}>
        {props.content}
      </p>
    </li>
  );
}

function Resume() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="p-4 sm:px-24">
      <div className="flex justify-between items-center align-middle">
        <div className="flex flex-col">
          <h1
            className={
              theme === "light"
                ? "text-xl text-slate-800 font-cmu font-bold"
                : "text-xl text-slate-200 font-cmu font-bold"
            }
          >
            Adrián Kronewitter Rufino
          </h1>
          <a
            className={
              theme === "light"
                ? "flex flex-row gap-x-2 text-md text-slate-800 font-cmu-it"
                : "flex flex-row gap-x-2 text-md text-slate-200 font-cmu-it"
            }
            href="./adrian_k_r_resume.pdf"
            download
          >
            Download pdf resume
            <io.IoMdDownload
              className={"mt-1 " + (theme === "light" ? "" : "text-slate-200")}
            ></io.IoMdDownload>
          </a>
        </div>

        <div className="flex flex-col">
          <a
            className={theme === "light" ? pLight : pDark}
            href="mailto:adriankr38@gmail.com"
          >
            adriankr38@gmail.com
          </a>

          <p className={theme === "light" ? pLight : pDark}>
            Mobile: +34 694470488
          </p>
        </div>
      </div>
      <CvTitle theme={theme} title="Experience"></CvTitle>
      <section className="pt-2">
        <JobDescription
          theme={theme}
          jobCompany="Amazon"
          jobTitle="Network Flow Specialist"
          jobLocation="Barcelona, Spain"
          jobTimeInterval="Sept 2021 - Present"
        />
        <Paragraph
          content="Optimizing Amazon Logistics workflow through the european network. Working on different projects ranging from on-time package delivery success to at-warehouse performance improvement."
          theme={theme}
        />
        <Paragraph
          content="Developed a truck incidence system that helps pinpoint a significant amount of daily risk & notifies warehouses of truck incidences."
          theme={theme}
        />
        <Paragraph
          content="Created a warehosue processing-rate tracker alinged with truck arrivals that helped warehouses offer Voluntary Time Off to employees."
          theme={theme}
        />
        <Paragraph
          content="Stack used: Python, MySQL, AWS (Lambda func. Quicksight, S3, Workspaces), JavaScript & Excel."
          theme={theme}
        />
      </section>
      <section className="py-2">
        <JobDescription
          theme={theme}
          jobCompany="UpWork"
          jobTitle="Data Analyst"
          jobLocation="United States"
          jobTimeInterval="Jun 2021 - Oct 2021"
        />
        <Paragraph
          content="Worked on the speech analytics industry by performing text-mining on call-center agent phonecalls targeting selling performance, behavioral & speech attributes."
          theme={theme}
        />

        <Paragraph
          content="Helped Supply Chain Management understand their customer demand with time-series forecasting & visualization."
          theme={theme}
        />

        <Paragraph
          content="Python tutoring (basic-intermediate level)."
          theme={theme}
        />

        <Paragraph
          content="Stack used: Python, MySQL, Tableau."
          theme={theme}
        />
      </section>
      <section className="py-2">
        <CvTitle title="Education" theme={theme}></CvTitle>
        <Education
          theme={theme}
          educationCenter="Amazon Career Choice, Ironhack"
          educationTitle="Bootcamp on Backend Development"
          educationLocation="Barcelona, Spain"
          educationDurationPeriod="Feb 2023 - Jul 2023"
        />

        <Education
          theme={theme}
          educationCenter="IEBS Business School"
          educationTitle="Masters Degree on Data Science"
          educationLocation="Barcelona, Spain"
          educationDurationPeriod="Nov 2021 - Nov 2022"
        />

        <Education
          theme={theme}
          educationCenter="Universidad de La Laguna"
          educationTitle="University Degree on Psychology - focus on statistics & neuroscience."
          educationLocation="Canary Islands, Spain"
          educationDurationPeriod="Sept 2016 - Jun 2020"
        />
      </section>
      <section className="py-2">
        <CvTitle title="Programming Skills" theme={theme} />
        <InlineDescription
          theme={theme}
          title="Languages:"
          content="Python, Java, JavaScript, TypeScript, GoLang, MySQL."
        />
        <InlineDescription
          theme={theme}
          title="Technologies:"
          content="ReactJs, NextJs, TailwindCss, SpringBoot, JPA, Tableau, AWS."
        />
      </section>
    </div>
  );
}

export default Resume;
