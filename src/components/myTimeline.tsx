import { Timeline, Text, createStyles, Box, Title, rem } from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const useStyles = createStyles((theme) => ({
  timeline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  year: {
    display: "flex",
    alignItems: "center",
    gap: rem(180),
  },
}));

export default function MyTimeline() {
  const { classes } = useStyles();
  return (
    <Box component="section" className={classes.timeline}>
      <div className={classes.year}>
        <ArrowLeftIcon />
        <h1>2020</h1>
        <ArrowRightIcon />
      </div>
      <Timeline bulletSize={24} lineWidth={5} align="right">
        <Timeline.Item title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{" "}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{" "}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="solid">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{" "}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}
