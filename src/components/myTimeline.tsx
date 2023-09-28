import { Timeline, Text, createStyles, Box, rem } from "@mantine/core";
import YearTitle from "./yearTitle";
import Link from "next/link";
import useTimeline from "../hooks/useTimeline";
import Alldata from "../../contents/alldata";
import { CalendarCheck } from "lucide-react";
import translations from "../../locales/en/useExternalLink";

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
    projetoestatisticasdosalunos,
    cursodereact,
    reactjs,
    html5,
    web,
    css3,
    github,
    cSharp,
    gridlayout,
  } = translations;

  function addLinkOnText(textLink: string, description: string) {
    if (textLink === "Ensino Medio") {
      return (
        <Text c="dimmed" size="sm">
          Começei a minha jornada no ensino médio no curso de{" "}
          <strong>
            Informatica de Gestão no Instituto Politécnico de Administração e
            Gestão da Catumbela (IPAG).
          </strong>{" "}
          Foi no ensino médio que os meus sonhos começaram a ser constuídos.
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
          foi a primeira Linguagem de Programação da minha carreira foi boa a
          experiência pude aprender comandos voltado ao{" "}
          <Link href={frontendAndbackend}>
            <a className={classes.links} target="_blank">
              back-end
            </a>
          </Link>{" "}
          por meios dos estudos escolares
        </Text>
      );
    }
    if (textLink === "Curso em Video") {
      return (
        <Text c="dimmed" size="sm">
          Meu primeiro contato com a programação estudei no{" "}
          <Link href={cursoEmVideoProgrammingLogic}>
            <a className={classes.links} target="_blank">
              canal curso em video
            </a>
          </Link>{" "}
          sensacional me ajudou muito a minha maneira de pensar.
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
          Então ficando encantado com as tecnologias voltadas a{" "}
          <Link href={web}>
            <a className={classes.links} target="_blank">
              Web
            </a>
          </Link>{" "}
          fiz o curso de{" "}
          <Link href={cursodejavascript}>
            <a className={classes.links} target="_blank">
              Javasript no canal curso em video
            </a>
          </Link>{" "}
          até agora o melhor que já fiz aprendi muito pode melhorar minhas
          habilidades e dar os meus primeiros passos na Linguagem. sensacional
          me ajudou muito a minha maneira de pensar.
        </Text>
      );
    }
    if (textLink === "HTML e CSS") {
      return (
        <Text c="dimmed" size="sm">
          Mesmo já confortável com{" "}
          <Link href={html5}>
            <a className={classes.links} target="_blank">
              HTML
            </a>
          </Link>{" "}
          e{" "}
          <Link href={css3}>
            <a className={classes.links} target="_blank">
              CSS
            </a>
          </Link>{" "}
          , mas ainda precisava aprimorar no meu CSS, então dei uma chance pra
          esse{" "}
          <Link href={cursodehtmlecss}>
            <a className={classes.links} target="_blank">
              curso de html e css
            </a>
          </Link>
          . Foi bom tê-lo feito, lembro que na época, me ensinou a trabalhar com
          <strong> float</strong> e <strong>position </strong> do CSS, antes
          desse curso não entendia muito bem essas propriedades.
          <p>
            Hoje em dia já não recomendo esse curso,{" "}
            <Link href={flexbox}>
              <a className={classes.links} target="_blank">
                Flexbox
              </a>
            </Link>{" "}
            e{" "}
            <Link href={gridlayout}>
              <a className={classes.links} target="_blank">
                Grid
              </a>
            </Link>{" "}
            Layout não eram realidade nessa época.
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
