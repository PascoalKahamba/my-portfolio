import { createStyles, rem } from "@mantine/core";
import React from "react";
import useMedia from "../hooks/useMedia";

const useStyles = createStyles((theme) => ({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(17),
  },

  titleMobile: {
    margin: "1rem auto",
    flexDirection: "column",
    gap: rem(2),
  },

  line: {
    height: rem(3),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    [theme.fn.smallerThan("md")]: {
      height: rem(2),
    },
  },

  title: {
    fontSize: rem(25),
    [theme.fn.smallerThan("md")]: {
      fontSize: theme.spacing.lg,
    },
  },
}));

interface GlobalTitleProps {
  title: string;
  width: number;
}

export default function GlobalTitle({ title, width }: GlobalTitleProps) {
  const { classes } = useStyles();
  const mobile = useMedia("(max-width:52rem)");

  return (
    <div
      className={`${classes.flexTitle} ${mobile && classes.titleMobile}`}
      data-aos="fade-left"
      data-aos-duration="1400"
    >
      <div className={classes.line} style={{ width: rem(width) }}></div>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.line} style={{ width: rem(width) }}></div>
    </div>
  );
}
