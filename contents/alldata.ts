import useTranslation from "next-translate/useTranslation";
import useDate from "../src/hooks/useDate";
import Link from "next/link";

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
  const { amountMonth, amountYear, monthOrYear, theYear } = useDate(4, 2018);
  console.log(theYear);

  const courseInVideo = `canal Curso em Video`;

  const allJourney = [
    [
      {
        title: "Começo de tudo Ingresso no ensino médio.",
        description:
          "Foi este ano que ingressei no Ensino Médio então os meus sonhos começaram a ser construídos.",
        date: `Fevereiro há mais de ${amountYear} anos.`,
        dataAos: "fade-left",

        textLink: "Kahamba",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description: `Meu primeiro contato com a programação estudei no ${courseInVideo} sensacional me ajudou muito a minha maneira de pensar.`,
        date: `Maio há mais ${amountYear} anos.`,
        dataAos: "fade-right",
        textLink: "Ndondi",
      },
      {
        title: "Relaxar com meu amigos.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Estudar Ingles.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
    ],
    [
      {
        title: "Mais Informacoes em breve.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Pascoal Kahamba.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Domingas Samba.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Melhorando minhas habilidades.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
    ],
    [
      {
        title: "Tudo sobre mim.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Desenvolvendo o projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Paulina Dos Santos.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Lernado da Cruz.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
    ],
    [
      {
        title: "Teste na Aplicacao.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Mudando o texto do projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
      },
      {
        title: "Melhorando os estilos do projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",

        textLink: "Pascoal",
      },
      {
        title: "Modificando os textos do projeto.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
        textLink: "Pascoal",
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
        date: `Abril a proxidamente ${amountMonth} ${monthOrYear}.`,
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
