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
    html5,
    web,
    css3,
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
