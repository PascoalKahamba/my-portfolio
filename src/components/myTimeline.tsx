import { Timeline, Text, createStyles, Box, rem } from "@mantine/core";
import YearTitle from "./yearTitle";
import Link from "next/link";
import useTimeline from "../hooks/useTimeline";
import Alldata from "../../contents/alldata";
import { CalendarCheck } from "lucide-react";
import translations from "../../locales/en/useExternalLink";
import useTranslation from "next-translate/useTranslation";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  description: {
    width: rem(470),
    whiteSpace: "normal",

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
  date: {
    display: "flex",
    alignItems: "center",
    gap: rem(5),
  },
  links: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function MyTimeline() {
  const { classes } = useStyles();
  const { allJourney } = Alldata();
  const myTimeline = useTimeline(allJourney);
  const {
    cursoEmVideoProgrammingLogic,
    frontendAndbackend,
    cursodejavascript,
    flexbox,
    cursodehtmlecss,
    projetoacha5,
    projetocrud,
    typescript,
    frontEnd,
    materialuidocs,
    styledcomponentsdocs,
    projetonewcrud,
    codeleapwebsite,
    projetogestorfinanceiro,
    typescriptdocs,
    reactdoc,
    nextjsdocs,
    projetoestatisticasdosalunos,
    cursodereact,
    reactjs,
    html5,
    web,
    mantinedocs,
    jotaidocs,
    reactcontextapidocs,
    tailwindcssdocs,
    myportfolio,
    css3,
    github,
    cSharp,
    gridlayout,
  } = translations;
  const { t: translate } = useTranslation("common");

  function addLinkOnText(textLink: string, description: string) {
    if (textLink === "Ensino Medio") {
      return (
        <Text c="dimmed" size="sm">
          {translate("start-journey")} <strong>{translate("my-school")}</strong>{" "}
          {translate("start-journey2")}{" "}
        </Text>
      );
    }
    if (textLink === "finalensinomedio") {
      return (
        <Text c="dimmed" size="sm">
          Depois de uma jornada de 4 anos terminei o ensino médio no{" "}
          <strong>
            Instituto Politécnico de Administração e Gestão da Catumbela (IPAG)
          </strong>{" "}
          tendo adquirido o grau como{" "}
          <strong>Tecnico médio de Informatica de Gestão</strong>.
        </Text>
      );
    }
    if (textLink === "styledcomponents") {
      return (
        <Text c="dimmed" size="sm">
          Com a finalidade de melhorar as minhas habilidades no que toca aos
          estilos aprendi Styled-Components na sua{" "}
          <Link href={styledcomponentsdocs}>
            <a className={classes.links} target="_blank">
              documentação
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "tailwindcss") {
      return (
        <Text c="dimmed" size="sm">
          <Link href={tailwindcssdocs}>
            <a className={classes.links} target="_blank">
              Tailwindcss
            </a>
          </Link>{" "}
          é um framework de estilos bem interessante e simples de utilizar por
          tal motivo decidi estudar ele para ser mais umas das minhas
          habilidades.
        </Text>
      );
    }
    if (textLink === "mantine") {
      return (
        <Text c="dimmed" size="sm">
          Com a finalidade de aumentar nas minhas ferramentas de desenvolvimento
          voltadas aos estilos aprendi a biblioteca de components{" "}
          <Link href={mantinedocs}>
            <a className={classes.links} target="_blank">
              Matine
            </a>
          </Link>{" "}
          foi sensecinal.
        </Text>
      );
    }
    if (textLink === "portfolio") {
      return (
        <Text c="dimmed" size="sm">
          Depois de ter adiado por alguns tempos finalmente desenvolvi o meu{" "}
          <Link href={myportfolio}>
            <a className={classes.links} target="_blank">
              portfolio
            </a>
          </Link>{" "}
          abordando a minha jornada, habilidades tudo a respeito do meu
          potêncial.
        </Text>
      );
    }
    if (textLink === "jotai") {
      return (
        <Text c="dimmed" size="sm">
          Já dominando{" "}
          <Link href={reactcontextapidocs}>
            <a className={classes.links} target="_blank">
              Context-API
            </a>
          </Link>{" "}
          decide procurar outras maineiras de lidar com estados globais então
          estudai{" "}
          <Link href={jotaidocs}>
            <a className={classes.links} target="_blank">
              Jotai
            </a>
          </Link>{" "}
          que por mim é muito simples desde então uso ele em meus projetos.
        </Text>
      );
    }
    if (textLink === "next") {
      return (
        <Text c="dimmed" size="sm">
          Sabendo que é o framework do{" "}
          <Link href={reactjs}>
            <a className={classes.links} target="_blank">
              react
            </a>
          </Link>{" "}
          mais querido da comunidade aprendi{" "}
          <Link href={nextjsdocs}>
            <a className={classes.links} target="_blank">
              next na documentação
            </a>
          </Link>{" "}
          sento agora a minha principal ferramenta de desenvolvimento que
          utilizo nos meus projetos.
        </Text>
      );
    }
    if (textLink === "gestorfinanceiro") {
      return (
        <Text c="dimmed" size="sm">
          Crie um{" "}
          <Link href={projetogestorfinanceiro}>
            <a className={classes.links} target="_blank">
              Gestor Financeiro
            </a>
          </Link>{" "}
          com outras tecnologias tornando o projeto mais elegante com a
          finalidade de melhorar as minhas habilidades nas tecnologias
          utilizadas.
        </Text>
      );
    }
    if (textLink === "materialui") {
      return (
        <Text c="dimmed" size="sm">
          Sendo uma biblioteca de componentes do React bem popular dei uma
          change ao{" "}
          <Link href={materialuidocs}>
            <a className={classes.links} target="_blank">
              Material-UI
            </a>
          </Link>{" "}
          para aumentar as minhas habilidades.
        </Text>
      );
    }
    if (textLink === "newcrud") {
      return (
        <Text c="dimmed" size="sm">
          Este{" "}
          <Link href={projetonewcrud}>
            <a className={classes.links} target="_blank">
              projeto (CRUD)
            </a>
          </Link>{" "}
          foi desenvolvido especialmente para o teste de uma entrevista que fiz
          da empresa{" "}
          <Link href={codeleapwebsite}>
            <a className={classes.links} target="_blank">
              Codeleap
            </a>
          </Link>{" "}
          com a finalidade de conseguir uma vaga como{" "}
          <Link href={frontEnd}>
            <a className={classes.links} target="_blank">
              Frond-End Developer
            </a>
          </Link>{" "}
          .
        </Text>
      );
    }
    if (textLink === "typescript") {
      return (
        <Text c="dimmed" size="sm">
          Finalmente dei uma chance ao{" "}
          <Link href={typescript}>
            <a className={classes.links} target="_blank">
              Typescript
            </a>
          </Link>{" "}
          para melhorar o meu codigo tornando ele mais claro e seguro tipando
          ele ponta á ponta. Basicamente aprendi Typecript na sua{" "}
          <Link href={typescriptdocs}>
            <a className={classes.links} target="_blank">
              documentação
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "github") {
      return (
        <Text c="dimmed" size="sm">
          Desde então passei a publicar os meus projetos no{" "}
          <Link href={github}>
            <a className={classes.links} target="_blank">
              GitHub
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "acha5") {
      return (
        <Text c="dimmed" size="sm">
          Para fins de melhorar as minhas habilidades fins vários projetos como
          o{" "}
          <Link href={projetoacha5}>
            <a className={classes.links} target="_blank">
              Acha-5
            </a>
          </Link>
          .
        </Text>
      );
    }
    if (textLink === "crud") {
      return (
        <Text c="dimmed" size="sm">
          Sento um projeto desafiador desenvolvi um{" "}
          <Link href={projetocrud}>
            <a className={classes.links} target="_blank">
              CRUD
            </a>
          </Link>{" "}
          para fins de estudos.
        </Text>
      );
    }
    if (textLink === "C#") {
      return (
        <Text c="dimmed" size="sm">
          {" "}
          <Link href={cSharp}>
            <a className={classes.links} target="_blank">
              C#
            </a>
          </Link>{" "}
          {translate("c#")}{" "}
          <Link href={frontendAndbackend}>
            <a className={classes.links} target="_blank">
              back-end
            </a>
          </Link>{" "}
          {translate("text-c#")}{" "}
        </Text>
      );
    }
    if (textLink === "Curso em Video") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-studies")}{" "}
          <Link href={cursoEmVideoProgrammingLogic}>
            <a className={classes.links} target="_blank">
              {translate("video-course")},
            </a>
          </Link>{" "}
          {translate("video-course2")}
        </Text>
      );
    }
    if (textLink === "estatisticasdosalunos") {
      return (
        <Text c="dimmed" size="sm">
          Desenvolvi o projeto{" "}
          <Link href={projetoestatisticasdosalunos}>
            <a className={classes.links} target="_blank">
              Estatisticas dos Alunos
            </a>
          </Link>{" "}
          para melhorar as minhas habilidades em React.
        </Text>
      );
    }
    if (textLink === "reactdoc") {
      return (
        <Text c="dimmed" size="sm">
          Já entendendo o fluxo como o React funciona decidi ir mais a fundo na
          tecnologia estudando na{" "}
          <Link href={reactdoc}>
            <a className={classes.links} target="_blank">
              documentação do react
            </a>
          </Link>{" "}
          conceitos mais avançados.
        </Text>
      );
    }
    if (textLink === "react") {
      return (
        <Text c="dimmed" size="sm">
          Desde então com o objeto de aumentar as minhas habilidades fiz o curso
          de{" "}
          <Link href={reactjs}>
            <a className={classes.links} target="_blank">
              React
            </a>
          </Link>{" "}
          no canal da{" "}
          <Link href={cursodereact}>
            <a className={classes.links} target="_blank">
              Origamid
            </a>
          </Link>{" "}
          , sendo hoje a minha habilidade principal. sensacional me ajudou muito
          a minha maneira de pensar.
        </Text>
      );
    }
    if (textLink === "javascript") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-javascript")} {translate("technologies")}{" "}
          {translate("then")}{" "}
          <Link href={web}>
            <a className={classes.links} target="_blank">
              Web
            </a>
          </Link>{" "}
          {translate("took")}{" "}
          <Link href={cursodejavascript}>
            <a className={classes.links} target="_blank">
              {translate("javascript-course2")}
            </a>
          </Link>{" "}
          {translate("end-javascript")}
        </Text>
      );
    }
    if (textLink === "HTML e CSS") {
      return (
        <Text c="dimmed" size="sm">
          {translate("first-HTML")}{" "}
          <Link href={html5}>
            <a className={classes.links} target="_blank">
              HTML
            </a>
          </Link>{" "}
          {translate("and")}{" "}
          <Link href={css3}>
            <a className={classes.links} target="_blank">
              CSS
            </a>
          </Link>{" "}
          , {translate("sencod-HTML")}{" "}
          <Link href={cursodehtmlecss}>
            <a className={classes.links} target="_blank">
              {translate("HTML-course")} de html e css
            </a>
          </Link>{" "}
          {translate("text-try")}. {translate("text-after-try")}
          <strong> float</strong> {translate("and")} <strong>position</strong>{" "}
          {translate("of-CSS")} {translate("text-CSS")}
          <p>
            {translate("nowadays")}{" "}
            <Link href={flexbox}>
              <a className={classes.links} target="_blank">
                Flexbox
              </a>
            </Link>{" "}
            {translate("and")}{" "}
            <Link href={gridlayout}>
              <a className={classes.links} target="_blank">
                Grid
              </a>
            </Link>{" "}
            {translate("end-CSS")}{" "}
          </p>
        </Text>
      );
    }

    return (
      <Text c="dimmed" size="sm">
        {description}
      </Text>
    );
  }

  const timelineItems = myTimeline.map(
    ({ date, description, title, dataAos, textLink }) => (
      <Timeline.Item
        key={title}
        title={title}
        data-aos={dataAos}
        className={classes.description}
      >
        {addLinkOnText(textLink, description)}
        <Text size="xs" mt={4} className={classes.date}>
          <CalendarCheck size="1rem" /> {date}
        </Text>
      </Timeline.Item>
    )
  );

  return (
    <Box component="section" className={classes.timeline}>
      <YearTitle kindOfTitle="upTitle" />
      <Timeline bulletSize={24} lineWidth={5} align="right">
        {timelineItems}
      </Timeline>
      <YearTitle kindOfTitle="downTitle" />
    </Box>
  );
}
