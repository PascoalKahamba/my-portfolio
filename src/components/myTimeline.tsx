import { Timeline, Text, createStyles, Box, Title, rem } from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import YearTitle from "./yearTitle";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface MyTimelineProps {
  myJourney: {
    title: string;
    description: string;
    date: string;
    dataAos: string;
  }[];
}

export default function MyTimeline({ myJourney }: MyTimelineProps) {
  const { classes } = useStyles();

  const timelineItems = myJourney.map(
    ({ date, description, title, dataAos }) => (
      <Timeline.Item key={title} title={title} data-aos={dataAos}>
        <Text c="dimmed" size="sm">
          {description}
        </Text>
        <Text size="xs" mt={4}>
          {date}
        </Text>
      </Timeline.Item>
    )
  );

  return (
    <Box component="section" className={classes.timeline}>
      <YearTitle year="2018" />
      <Timeline bulletSize={24} lineWidth={5} align="right">
        {timelineItems}
      </Timeline>
    </Box>
  );
}
