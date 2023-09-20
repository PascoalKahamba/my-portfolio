import { createStyles, rem } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  line: {
    height: rem(3),
    // flex: " 1 1 40rem",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
}));

interface GlobalTitleProps {
  title: string;
  width: number;
}

export default function GlobalTitle({ title, width }: GlobalTitleProps) {
  const { classes } = useStyles();
  return (
    <>
      <div
        className={classes.line}
        style={
          title !== "FRONT-END" ? { width: rem(width) } : { width: rem(235) }
        }
      ></div>
      <h1>{title}</h1>
      <div
        className={classes.line}
        style={
          title !== "FRONT-END" ? { width: rem(width) } : { width: rem(235) }
        }
      ></div>
    </>
  );
}
