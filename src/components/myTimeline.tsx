import { Timeline, Text, createStyles, Box, rem } from "@mantine/core";
import YearTitle from "./yearTitle";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    // width: rem(500),
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

interface MyTimelineProps {
  myTimeline: {
    title: string;
    textLink: string;
    description: string;
    date: string;
    dataAos: string;
  }[];
}

export default function MyTimeline({ myTimeline }: MyTimelineProps) {
  const { classes } = useStyles();

  function addLinkOnText(textLink: string, description: string) {
    if (textLink === "Ndondi") {
      return (
        <Text c="dimmed" size="sm" className={classes.description}>
          <Link href="/">
            <a className={classes.links}>Curso em video</a>
          </Link>
        </Text>
      );
    }

    return (
      <Text c="dimmed" size="sm" className={classes.description}>
        {description}
      </Text>
    );
  }

  const timelineItems = myTimeline.map(
    ({ date, description, title, dataAos, textLink }) => (
      <Timeline.Item key={title} title={title} data-aos={dataAos}>
        {addLinkOnText(textLink, description)}
        <Text size="xs" mt={4}>
          {date}
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
