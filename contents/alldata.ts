import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 1;
const APRIL = 4;
const AMOUNTMONTHDECEMBER = 10;
const AMOUNTMONTHMARCH = 8;
const AMOUNTMONTHJUNE = 5;
const AMOUNTMONTHMAY = 6;
const AMOUNTMONTHJULY = 4;

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
        { label: "JavaScript", link: "Pascoal" },
        { label: "TypeScript", link: "Pascoal" },
        { label: "React.js", link: "Pascoal" },
        { label: "Next.js", link: "Pascoal" },
      ],
    },
    {
      title: translate("journey"),
      links: [
        { label: "2023", link: "Pascoal" },
        { label: "2022", link: "Pascoal" },
        { label: "2021", link: "Pascoal" },
        { label: "2020", link: "Pascoal" },
        { label: "2019", link: "Pascoal" },
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

  const allJourney = [
    [
      {
        title: translate("entrance-school"),
        description: "",
        date: `${translate("february")} ${amountYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "Ensino Medio",
      },
      {
        title: translate("started-logic"),
        description: " ",
        date: `${translate("may")} ${amountYear} ${translate("years")}.`,
        dataAos: "fade-right",
        textLink: "Curso em Video",
      },
      {
        title: translate("first-code"),
        description: translate("first-code-desc"),
        date: `${translate("june")} ${amountYear} ${translate("years")}.`,
        dataAos: "fade-left",
        textLink: "Primeiros codigos",
      },
    ],
    [
      {
        title: "Começei a estudar C# na escola.",
        description: "",
        date: `Março há mais  de ${marchYear} anos.`,
        dataAos: "fade-right",
        textLink: "C#",
      },
      {
        title: "Primeiro contato com a Web.",
        description: " ",
        date: `Agosto há mais  de ${marchYear} anos.`,
        dataAos: "fade-left",
        textLink: "HTML e CSS",
      },
      {
        title: "Fiz o curso de Javascript.",
        description: "",
        date: `Novembro há mais  de ${marchYear} anos.`,
        dataAos: "fade-right",
        textLink: "javascript",
      },
    ],
    [
      {
        title: "Me cadastrei no GitHub.",
        description:
          "Desde então passei a publicar os meus projetos no GitHub.",
        date: `Janeiro há mais de ${januaryYear} anos.`,
        dataAos: "fade-left",
        textLink: "github",
      },
      {
        title: "Crie um CRUD.",
        description: "",
        date: `Março há mais de ${januaryYear} anos.`,
        dataAos: "fade-left",
        textLink: "crud",
      },
      {
        title: "Fiz o projeto Acha-5.",
        description: "",
        date: `Fevereiro há mais de ${januaryYear} anos.`,
        dataAos: "fade-right",
        textLink: "acha5",
      },
    ],
    [
      {
        title: "Fiz o curso de React.",
        description: "",
        date: `Junho há mais de ${aprilYear} anos.`,
        dataAos: "fade-left",
        textLink: "react",
      },
      {
        title: "Crie o projeto Estatisticas dos Alunos.",
        description: "",
        date: `Setembro há mais de ${aprilYear} anos.`,
        dataAos: "fade-right",
        textLink: "estatisticasdosalunos",
      },
      {
        title: "Aprofundei os meus conhecimentos em React na sua documentação.",
        description: "",
        date: `Novembro há mais de ${aprilYear} anos.`,
        dataAos: "fade-left",
        textLink: "reactdoc",
      },
    ],
    [
      {
        title: "Terminei o Ensino Médio.",
        description: "",
        date: `Abril aproximadamente ${decemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "finalensinomedio",
      },
      {
        title: "Primeiro contato com o Typescript.",
        description: "",
        date: `Junho aproximadamente ${decemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "typescript",
      },
      {
        title: "Crie um CRUD mais moderno.",
        description: "",
        date: `Agosto aproximadamente ${decemberYear} ano.`,
        dataAos: "fade-right",
        textLink: "newcrud",
      },
      {
        title: "Aprendi Styles-Components.",
        description: "",
        date: `Setembro aproximadamente ${decemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "styledcomponents",
      },
      {
        title: "Aprendi Meterial-UI.",
        description: "",
        date: `Outobro aproximadamente ${decemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "materialui",
      },
      {
        title: "Crie um gestor Financeiro.",
        description: "",
        date: `Desembro há ${decemberMonth} mês.`,
        dataAos: "fade-right",
        textLink: "gestorfinanceiro",
      },
    ],
    [
      {
        title: "Começei a estudar Next.",
        description: "",
        date: `Março há ${amountMarchMonth} mês.`,
        dataAos: "fade-left",
        textLink: "next",
      },
      {
        title: "Aprendi Tailwindcss.",
        description: "",
        date: `Maio há ${amountMayMonth} mês.`,
        dataAos: "fade-left",
        textLink: "tailwindcss",
      },
      {
        title: "Aprendi Jotai.",
        description: "",
        date: `Junho há ${amountJuneMonth} mês.`,
        dataAos: "fade-right",
        textLink: "jotai",
      },
      {
        title: "Aprendi Mantine.",
        description: " ",
        date: `Junho há ${amountJuneMonth} mês.`,
        dataAos: "fade-left",
        textLink: "mantine",
      },
      {
        title: "Finalmente crie o meu Portfolio.",
        description: " ",
        date: `Julho há ${amountJulyMonth} mês.`,
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
