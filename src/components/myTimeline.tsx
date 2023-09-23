import { Timeline, Text, createStyles, Box, Title, rem } from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import YearTitle from "./yearTitle";
import Alldata from "../../contents/alldata";
import useTimeline from "../hooks/useTimeline";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface MyTimelineProps {
  myTimeline: {
    title: string;
    description: string;
    date: string;
    dataAos: string;
  }[];
}

export default function MyTimeline({ myTimeline }: MyTimelineProps) {
  const { classes } = useStyles();
  const { allYears } = Alldata();
  const currentYear = useTimeline(allYears);

  const timelineItems = myTimeline.map(
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
      <YearTitle year={currentYear} />
      <Timeline bulletSize={24} lineWidth={5} align="right">
        {timelineItems}
      </Timeline>
      <YearTitle year={currentYear} />
    </Box>
  );
}
