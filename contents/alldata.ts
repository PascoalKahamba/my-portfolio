import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";
import Link from "next/link";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 1;
const APRIL = 4;
const AMOUNTMONTHDECEMBER = 10;

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
  const [_, amountYear, monthOrYear] = useDate(FEBRUARY, 2018);
  const [marchMonth, marchYear, noUse] = useDate(MARCH, 2019);
  const [januaryMonth, januaryYear, yet] = useDate(JANUARY, 2020);
  const [aprilMonth, aprilYear, all] = useDate(APRIL, 2021);
  const [deceemberMonth, novemberYear, almost] = useDate(
    AMOUNTMONTHDECEMBER,
    2022
  );

  const allJourney = [
    [
      {
        title: "Ingresso no Ensino Médio.",
        description: "",
        date: `Fevereiro há mais de ${amountYear} anos.`,
        dataAos: "fade-left",
        textLink: "Ensino Medio",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description: " ",
        date: `Maio há mais de ${amountYear} anos.`,
        dataAos: "fade-right",
        textLink: "Curso em Video",
      },
      {
        title: "Primeiros códigos da minha carreira.",
        description:
          "Desde então passei a fazer os exercícios proposto pelo curso acima referido e fui melhorando a minha maneira de pensar.",
        date: `Julho há mais de ${amountYear} anos.`,
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
        date: `Abril aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "finalensinomedio",
      },
      {
        title: "Primeiro contato com o Typescript.",
        description: "",
        date: `Junho aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "typescript",
      },
      {
        title: "Crie um CRUD mais moderno.",
        description: "",
        date: `Agosto aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-right",
        textLink: "newcrud",
      },
      {
        title: "Aprendi Styles-Components.",
        description: "",
        date: `Setembro aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "styledcomponents",
      },
      {
        title: "Aprendi Meterial-UI.",
        description: "",
        date: `Outobro aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "materialui",
      },
      {
        title: "Crie um gestor Financeiro.",
        description: "",
        date: `Desembro há ${deceemberMonth} mês.`,
        dataAos: "fade-right",
        textLink: "gestorfinanceiro",
      },
    ],
    [
      {
        title: "Começei a estudar Next.",
        description:
          "Sabendo que é o framework do react mais querido da comunidade aprendi o next na documentação sento agora a minha principal ferramenta de desenvolvimento que utilizo nos meus projetos.",
        date: `Março há ${novemberYear} mês.`,
        dataAos: "fade-left",
        textLink: "next",
      },
      {
        title: "Aprendi Tailwindcss.",
        description:
          "O Tailwindcss é um framework de estilos bem interessante e simples de utilizar por tal motivo decidi estudar ele para ser mais umas das minhas habilidades.",
        date: `Maio há ${deceemberMonth} mês.`,
        dataAos: "fade-left",
        textLink: "tailwindcss",
      },
      {
        title: "Aprendi Jotai.",
        description:
          "Já dominando Context-API decide procurar outras maineiras de lidar com estados globais então estudai Jotai que por mim é muito simples desde então uso ele em meus projetos.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: `Junho há ${deceemberMonth} mês.`,
        textLink: "jotai",
      },
      {
        title: "Aprendi Mantine.",
        description:
          "Com a finalidade de aumentar nas minhas ferramentas de desenvolvimento voltadas aos estilos aprendi a biblioteca de components Matine foi sensecinal.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: `Junho há ${deceemberMonth} mês.`,
        textLink: "mantine",
      },
      {
        title: "Finalmente crie o meu Portfolio.",
        description:
          "Depois de ter adiado por alguns tempos finalmente desenvolvi o meu portfolio abordando a minha jornada, habilidades tudo a respeito do meu potencial.",
        date: `Julho há ${deceemberMonth} mês.`,
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
