import { createStyles, rem } from "@mantine/core";
import { useAtom } from "jotai";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { countYearAtom } from "../atoms";
import React from "react";

const useStyles = createStyles((theme) => ({
  year: {
    display: "flex",
    alignItems: "center",
    gap: rem(180),
  },

  icon: {
    cursor: "pointer",
    translate: "3s",

    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
}));

interface YearTitleProps {
  year: string;
}

export default function YearTitle({ year }: YearTitleProps) {
  const [_, setCountYear] = useAtom(countYearAtom);
  const { classes } = useStyles();
  return (
    <div className={classes.year}>
      <ArrowLeftIcon
        className={classes.icon}
        onClick={() => setCountYear((countYear) => countYear - 1)}
      />
      <h1>{year}</h1>
      <ArrowRightIcon
        className={classes.icon}
        onClick={() => setCountYear((countYear) => countYear + 1)}
      />
    </div>
  );
}
