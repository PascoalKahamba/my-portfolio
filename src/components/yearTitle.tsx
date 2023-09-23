import { createStyles, rem } from "@mantine/core";
import { useAtom } from "jotai";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LucideArrowRight,
  LucideArrowLeft,
} from "lucide-react";
import { countYearAtom } from "../atoms";
import React from "react";
import Alldata from "../../contents/alldata";
import useTimeline from "../hooks/useTimeline";
import { MdArrowRightAlt } from "react-icons/md";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
const useStyles = createStyles((theme) => ({
  upYear: {
    display: "flex",
    alignItems: "center",
    gap: rem(180),
  },

  downYear: {
    display: "flex",
    marginTop: rem(20),
    alignItems: "center",
    justifyContent: "center",
    gap: rem(60),
  },

  upIcon: {
    cursor: "pointer",
    translate: "3s",

    "&:hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },
  flexIcon: {
    color: theme.colors.blue[5],
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    gap: rem(2),
    cursor: "pointer",
    fontSize: theme.spacing.md,
    translate: "3s",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

interface YearTitleProps {
  kindOfTitle: "upTitle" | "downTitle";
}

export default function YearTitle({ kindOfTitle }: YearTitleProps) {
  const [_, setCountYear] = useAtom(countYearAtom);
  const { allYears } = Alldata();
  const currentYear = useTimeline(allYears);
  const { classes } = useStyles();
  return (
    <>
      {kindOfTitle === "upTitle" ? (
        <div className={classes.upYear}>
          <ArrowLeftIcon
            className={classes.upIcon}
            onClick={() => setCountYear((countYear) => countYear - 1)}
          />
          <h1>{currentYear}</h1>
          <ArrowRightIcon
            className={classes.upIcon}
            onClick={() => setCountYear((countYear) => countYear + 1)}
          />
        </div>
      ) : (
        <div className={classes.downYear}>
          <div className={classes.flexIcon}>
            <HiOutlineArrowNarrowLeft size="1rem" /> Anterior
          </div>

          <div className={classes.flexIcon}>
            Proximo
            <HiOutlineArrowNarrowRight size="1rem" />
          </div>
        </div>
      )}
    </>
  );
}
