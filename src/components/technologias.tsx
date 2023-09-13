import { Box, createStyles, rem } from "@mantine/core";
import React from "react";

interface TechnologiesProps {
  job: string;
  skills: {
    icon: string;
    name: string;
    description: string;
  }[];
}

const useStyles = createStyles((theme) => ({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(10),
  },

  line: {
    width: rem(5),
    backgroundColor: theme.white,
  },
}));

export default function Technologias({ job, skills }: TechnologiesProps) {
  const { classes } = useStyles();
  return (
    <Box component="section">
      <div className={classes.flexTitle}>
        <div className={classes.line}></div>
        <h1>{job}</h1>
        <div></div>
      </div>
    </Box>
  );
}
