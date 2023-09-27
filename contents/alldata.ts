import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";
import Link from "next/link";

const FEBRUARY = 2;
const MARCH = 3;
const JANUARY = 6;
const APRIL = 4;

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
        date: `Maio há mais ${amountYear} anos.`,
        dataAos: "fade-right",
        textLink: "Curso em Video",
      },
      {
        title: "Primeiros códigos da minha carreira.",
        description:
          "Desde então passei a fazer os exercícios proposto pelo curso acima referido e fui melhorando a minha maneira de pensar.",
        date: `Julho há mais ${amountYear} anos.`,
        dataAos: "fade-left",
        textLink: "Primeiros codigos",
      },
    ],
    [
      {
        title: "Começei a estudar C# na escola.",
        description: "",
        date: `Março há mais ${marchYear} anos.`,
        dataAos: "fade-right",
        textLink: "C#",
      },
      {
        title: "Primeiro contato com a Web.",
        description: " ",
        date: `Agosto há mais ${marchYear} anos.`,
        dataAos: "fade-left",
        textLink: "HTML e CSS",
      },
      {
        title: "Fiz o curso de Javascript.",
        description: "",
        date: `Novembro há mais ${marchYear} anos.`,
        dataAos: "fade-right",
        textLink: "javascript",
      },
    ],
    [
      {
        title: "Me cadastrei no GitHub.",
        description:
          "Desde então passei a publicar os meus projetos no GitHub.",
        date: `Janeiro há mais ${januaryYear} anos.`,
        dataAos: "fade-left",
        textLink: "github",
      },
      {
        title: "Crie um CRUD.",
        description: "",
        date: `Março há mais ${januaryYear} anos.`,
        dataAos: "fade-left",
        textLink: "crud",
      },
      {
        title: "Fiz o projeto Acha-5.",
        description: "",
        date: `Fevereiro há mais ${januaryYear} anos.`,
        dataAos: "fade-right",
        textLink: "acha5",
      },
    ],
    [
      {
        title: "Fiz o curso de React.",
        description:
          "Desde então com o objeto de aumentar as minhas habilidades fiz o curso de React no canal da Origamid, sendo hoje a minha habilidade principal.",
        date: `Junho há mais ${aprilYear} anos.`,
        dataAos: "fade-left",
        textLink: "react",
      },
      {
        title: "Crie o projeto Estatisticas dos Alunos.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: `Setembro há mais ${aprilYear} anos.`,
        dataAos: "fade-right",
        textLink: "estatisticasdosalunos",
      },
      {
        title: "Aprofundei os meus conhecimentos em React na sua documentação.",
        description:
          "Já entendendo o fluxo como o React funciona decidi ir mais afundo na tecnologia estudando na sua documentação conceitos mais avançados.",
        date: `Novembro há mais ${aprilYear} anos.`,
        dataAos: "fade-left",
        textLink: "reactdoc",
      },
    ],
    [
      {
        title: "Daniel Moco.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Adriano Gunga.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Ruben Ngonga.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: `Abril a proxidamente  ${monthOrYear}.`,
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
    ],
    [
      {
        title: "Feliciano Ndumbo.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Estuda no Universidade Publica.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Engenheiro Riso.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Tudo sobre o projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
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
