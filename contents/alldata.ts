import useTranslation from "next-translate/useTranslation";

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

  const allYears = ["2018", "2019", "2020", "2021", "2022", "2023"];

  const allJourney = [
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
    [
      {
        title: "Começo de tudo Ingresso do ensino médio.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-left",
      },
      {
        title: "Começei a estudar Lógica de Programação.",
        description:
          "Comecei a estudar Logica de Programação no canal Curso em Video.",
        date: "Janeiro a dois anos atras.",
        dataAos: "fade-right",
      },
    ],
  ];

  return { mainLinks, footerData, allJourney, allYears };
}
