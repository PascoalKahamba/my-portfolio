import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";
import Link from "next/link";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 1;
const APRIL = 4;
const AMOUNTMONTHDECEMBER = 9;

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
        date: `Fevereiro há mais de $ de {amountYear} anos.`,
        dataAos: "fade-left",
        textLink: "Ensino Medio",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description: " ",
        date: `Maio há mais $ de {amountYear} anos.`,
        dataAos: "fade-right",
        textLink: "Curso em Video",
      },
      {
        title: "Primeiros códigos da minha carreira.",
        description:
          "Desde então passei a fazer os exercícios proposto pelo curso acima referido e fui melhorando a minha maneira de pensar.",
        date: `Julho há mais $ de {amountYear} anos.`,
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
        title: "Primeiro contato com o Typescript.",
        description:
          "Finalmente dei uma chance ao Typescript para melhorar o meu codigo tornando ele mais claro e seguro tipando ele ponta á ponta. Basicamente aprendi Typecript na documentação.",
        date: `Junho aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "typescript",
      },
      {
        title: "Crie um CRUD mais moderno.",
        description:
          "Este projeto (CRUD) foi desenvolvido especialmente para o teste de uma entrevista que fiz da empresa coopast com a finalidade de conseguir uma vaga como Frond-End Developer.",
        date: `Agosto aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-right",
        textLink: "newcrud",
      },
      {
        title: "Aprendi Styles-Components.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: `Outubro aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "typescriptdoc",
      },
      {
        title: "Aprendi Meterial-UI.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: `Novembro aproximadamente ${novemberYear} ano.`,
        dataAos: "fade-left",
        textLink: "typescriptdoc",
      },
      {
        title: "Crie um gestor Financeiro.",
        description:
          "Crie um Gestor Financeiro com outras tecnologias tornando o projeto mais elegante com a finalidade de melhorar as minhas habilidades nas tecnologias utilizadas.",
        date: `Desembro há ${deceemberMonth} mês.`,
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
    ],
    [
      {
        title: "Começei a estudar Next.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Finalmente crie um meu Portfolio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Engenheiro Riso.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Tudo sobre o projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Ja de neiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
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
