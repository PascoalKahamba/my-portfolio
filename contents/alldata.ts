import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";
import { formatDistance } from "date-fns";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 1;
const APRIL = 4;
const MAY = 3;
const DECEMBER = 12;
const JUNE = 6;
const JULY = 7;
const OCTOBER = 10;
const NOVEMBER = 11;
const SEPTEMBER = 9;
const AUGUST = 8;
const AMOUNTMONTHDECEMBER = 10;
const AMOUNTMONTHMARCH = 8;
const AMOUNTMONTHJUNE = 5;
const AMOUNTMONTHMAY = 6;
const AMOUNTMONTHJULY = 4;

function getDate(year: number, month: number, day: number) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDay();

  const result = formatDistance(
    new Date(year, month, day),
    new Date(currentYear, currentMonth, currentDay)
  );

  return result;
}

export default function Alldata() {
  const { t: translate } = useTranslation("common");

  const mainLinks = [
    {
      label: translate("home"),
      link: "/",
    },
    {
      label: translate("about"),
      link: "/about",
    },
    {
      label: translate("journey"),
      link: "/journey",
    },
    {
      label: translate("projects"),
      link: "/projects",
    },
    {
      label: translate("contacts"),
      link: "/contacts",
    },
  ];

  const footerData = [
    {
      title: translate("navigation"),
      links: [
        { label: translate("home"), link: "/" },
        { label: translate("about"), link: "/about" },
        { label: translate("journey"), link: "/journey" },
        { label: translate("projects"), link: "/projects" },
        { label: translate("contacts"), link: "/contacts" },
      ],
    },
    {
      title: translate("tecnologies"),
      links: [
        { label: "JavaScript", link: "/journey" },
        { label: "TypeScript", link: "/journey" },
        { label: "React.js", link: "/journey" },
        { label: "Next.js", link: "/journey" },
      ],
    },
    {
      title: translate("journey"),
      links: [
        { label: "2023", link: "/journey" },
        { label: "2022", link: "/journey" },
        { label: "2021", link: "/journey" },
        { label: "2020", link: "/journey" },
        { label: "2019", link: "/journey" },
      ],
    },
  ];

  const frontEndSkiils = [
    {
      icon: "/html5.svg",
      name: "HTML5",
      aosDuration: 1800,
      description: translate("HTMLdesc"),
    },
    {
      icon: "/css.svg",
      name: "CSS3",
      aosDuration: 1600,
      description: translate("CSS3desc"),
    },
    {
      icon: "/js.svg",
      name: "JavaScript",
      aosDuration: 1400,
      description: translate("javascript"),
    },
    {
      icon: "/typescript.svg",
      name: "TypeScript",
      aosDuration: 1200,
      description: translate("typescript"),
    },
    {
      icon: "/react.svg",
      name: "Reactjs",
      aosDuration: 100,
      description: translate("reactjs"),
    },
    {
      icon: "/nextjs-line.svg",
      name: "Nextjs",
      aosDuration: 800,
      description: translate("nextjs"),
    },
  ];

  const otherTechnologies: typeof frontEndSkiils = [
    {
      name: "VS Code",
      icon: "/vscode.svg",
      aosDuration: 1800,
      description: translate("vscode"),
    },
    {
      name: "Photoshop",
      icon: "/photoshop.svg",
      aosDuration: 1600,
      description: translate("photoshop"),
    },
    {
      name: "Vercel",
      icon: "/vercel.png",
      aosDuration: 1400,
      description: translate("vercel"),
    },
  ];

  const allYears = ["2018", "2019", "2020", "2021", "2022", "2023"];
  const [_, amountYear] = useDate(FEBRUARY, 2018);
  const [marchMonth, marchYear] = useDate(MARCH, 2019);
  const [januaryMonth, januaryYear] = useDate(JANUARY, 2020);
  const [aprilMonth, aprilYear] = useDate(APRIL, 2021);
  const [decemberMonth, decemberYear] = useDate(AMOUNTMONTHDECEMBER, 2022);
  const [amountMarchMonth] = useDate(AMOUNTMONTHMARCH, 2023);
  const [amountJuneMonth] = useDate(AMOUNTMONTHJUNE, 2023);
  const [amountJulyMonth] = useDate(AMOUNTMONTHJULY, 2023);
  const [amountMayMonth] = useDate(AMOUNTMONTHMAY, 2023);

  const dateWentOnSchool = getDate(2018, FEBRUARY, 2);
  const dateStartedLogic = getDate(2018, MAY, 11);
  const dateFirstCode = getDate(2018, JUNE, 5);
  const dateStartedCSharp = getDate(2019, MARCH, 19);
  const dateFirstWeb = getDate(2019, AUGUST, 30);
  const dateJavascriptCourse = getDate(2019, NOVEMBER, 14);
  const dateGithub = getDate(2020, JANUARY, 21);
  const dateCreatedCRUD = getDate(2020, MARCH, 22);
  const dateCreatedFindFive = getDate(2020, FEBRUARY, 8);

  const allJourney = [
    [
      {
        title: translate("entrance-school"),
        description: "",
        date: dateWentOnSchool,
        dataAos: "fade-left",
        textLink: "ensinomedio",
      },
      {
        title: translate("started-logic"),
        description: " ",
        date: dateStartedLogic,
        dataAos: "fade-right",
        textLink: "cursoemvideo",
      },
      {
        title: translate("first-code"),
        description: translate("first-code-desc"),
        date: dateFirstCode,
        dataAos: "fade-left",
        textLink: "firstCode",
      },
    ],
    [
      {
        title: translate("start-c#"),
        description: "",
        date: dateStartedCSharp,
        dataAos: "fade-right",
        textLink: "C#",
      },
      {
        title: translate("first-web"),
        description: " ",
        date: dateFirstWeb,
        dataAos: "fade-left",
        textLink: "htmlecss",
      },
      {
        title: translate("javacript-course"),
        description: "",
        date: dateJavascriptCourse,
        dataAos: "fade-right",
        textLink: "javascript",
      },
    ],
    [
      {
        title: translate("github"),
        description: "",
        date: dateGithub,
        dataAos: "fade-left",
        textLink: "github",
      },
      {
        title: translate("CRUD"),
        description: "",
        date: dateCreatedCRUD,
        dataAos: "fade-left",
        textLink: "crud",
      },
      {
        title: translate("acha-5"),
        description: "",
        date: dateCreatedFindFive,
        dataAos: "fade-right",
        textLink: "acha5",
      },
    ],
    [
      {
        title: translate("react-course"),
        description: "",
        date: `${translate("june")} ${aprilYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "react",
      },
      {
        title: translate("statistics-student"),
        description: "",
        date: `${translate("september")} ${aprilYear} ${translate("years")}.`,
        dataAos: "fade-right",
        textLink: "estatisticasdosalunos",
      },
      {
        title: translate("deeply-react"),
        description: "",
        date: `${translate("november")} ${aprilYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "reactdoc",
      },
    ],
    [
      {
        title: translate("finished-school"),
        description: "",
        date: `${translate("april")} ${decemberYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "finalensinomedio",
      },
      {
        title: translate("first-typescript"),
        description: "",
        date: `${translate("june")} ${decemberYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "typescript",
      },
      {
        title: translate("created-CRUD"),
        description: "",
        date: `${translate("august")} ${decemberYear} ${translate("years")}.`,
        dataAos: "fade-right",
        textLink: "newcrud",
      },
      {
        title: translate("about-styled-components"),
        description: "",
        date: `${translate("september")} ${decemberYear} ${translate(
          "years"
        )}.`,
        dataAos: "fade-left",
        textLink: "styledcomponents",
      },
      {
        title: translate("about-Material-UI"),
        description: "",
        date: `${translate("october")} ${decemberYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "materialui",
      },
      {
        title: translate("created-financial-manager"),
        description: "",
        date: `${translate("december")} ${decemberMonth} ${translate(
          "month"
        )}.`,
        dataAos: "fade-right",
        textLink: "gestorfinanceiro",
      },
    ],
    [
      {
        title: translate("learned-next"),
        description: "",
        date: `${translate("march")} ${amountMarchMonth} ${translate(
          "month"
        )}.`,
        dataAos: "fade-left",
        textLink: "next",
      },
      {
        title: translate("learned-tailwindcss"),
        description: "",
        date: `${translate("may")} ${amountMayMonth} ${translate("month")}.`,
        dataAos: "fade-left",
        textLink: "tailwindcss",
      },
      {
        title: translate("learned-jotai"),
        description: "",
        date: `${translate("june")} ${amountJuneMonth} ${translate("month")}.`,
        dataAos: "fade-right",
        textLink: "jotai",
      },
      {
        title: translate("learned-mantine"),
        description: " ",
        date: `${translate("june")} ${amountJuneMonth} ${translate("month")}.`,
        dataAos: "fade-left",
        textLink: "mantine",
      },
      {
        title: translate("created-my-portfolio"),
        description: " ",
        date: `${translate("july")} ${amountJulyMonth} ${translate("month")}.`,
        dataAos: "fade-right",
        textLink: "portfolio",
      },
    ],
  ];

  return {
    mainLinks,
    footerData,
    allJourney,
    allYears,
    frontEndSkiils,
    otherTechnologies,
  };
}
