import { createStyles, Box, Image, Tooltip, rem } from "@mantine/core";
import { useState } from "react";
import { AlertCircleIcon } from "lucide-react";

interface TechnologiesProps {
  job: string;
  skills: {
    icon: string;
    name: string;
    aosDuration: number;
    description: string;
  }[];
}

const useStyles = createStyles((theme) => ({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(30),
  },

  icons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: rem(10),
  },

  icon: {
    display: "flex",
    flex: "0 1 8rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
    padding: "1rem 5px",
    borderRadius: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    "&:hover": {
      cursor: "pointer",
      boxShadow: " 0 6px 14px 1px rgb(0 0 0 / 20%)",
    },
  },

  flexLenged: {
    display: "flex",
    justifyContent: "center",
    gap: rem(10),
  },

  line: {
    width: rem(235),
    height: rem(3),
    // flex: " 1 1 40rem",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
}));

export default function Technologias({ job, skills }: TechnologiesProps) {
  const { classes } = useStyles();

  const mySkills = skills.map(({ aosDuration, name, description, icon }) => (
    <Tooltip
      label={
        <div className={classes.flexLenged}>
          <AlertCircleIcon size="1rem" />
          {description}
        </div>
      }
      position="top"
      withArrow
      className={classes.icon}
      transitionProps={{ duration: 0 }}
      key={name}
    >
      <div data-aos="flip-left" data-aos-duration={aosDuration}>
        <Image src={icon} alt={name} width={45} height={40} />
        <span>{name}</span>
      </div>
    </Tooltip>
  ));
  return (
    <Box component="section">
      <div
        className={classes.flexTitle}
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        <div className={classes.line}></div>
        <h1>{job}</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.icons}>{mySkills}</div>
    </Box>
  );
}
