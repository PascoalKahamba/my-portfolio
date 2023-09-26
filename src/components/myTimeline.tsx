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
  const { cursoEmVideoProgrammingLogic } = translations;

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
    if (textLink === "Curso em Video") {
      return (
        <Text c="dimmed" size="sm">
          Meu primeiro contato com a programação estudei no{" "}
          <Link href={cursoEmVideoProgrammingLogic}>
            <a className={classes.links} target="_blank">
              canal Curso em Video
            </a>
          </Link>{" "}
          sensacional me ajudou muito a minha maneira de pensar.
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
