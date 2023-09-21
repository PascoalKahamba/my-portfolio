import { createStyles, rem } from "@mantine/core";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  year: {
    display: "flex",
    alignItems: "center",
    gap: rem(180),
  },
}));

interface YearTitleProps {
  year: string;
}

export default function YearTitle({ year }: YearTitleProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.year}>
      <ArrowLeftIcon />
      <h1>{year}</h1>
      <ArrowRightIcon />
    </div>
  );
}
