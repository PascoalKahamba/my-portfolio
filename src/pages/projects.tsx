import { Box, Text, rem, createStyles } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import MainTitle from "../components/mainTitle";
import GlobalTitle from "../components/globalTitle";
import { nameDeveloperAtom } from "../atoms";
import { useAtom } from "jotai";
import ProjectCarousel from "../components/projectCarousel";

const useStyles = createStyles((theme) => ({
  projects: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(30),
  },
}));

export default function Projects() {
  const { classes } = useStyles();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("projects");

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <Box component="section">
        <MainTitle
          title={translate("page-title")}
          dataAos="zoom-in"
          dataAosDuration={1200}
        />
        <Text fz="xl" mt="sm" data-aos="fade-right" data-aos-duration="1200">
          {translate("about-project")}
        </Text>
        <GlobalTitle title={translate("page-title")} width={300} />
        <div className={classes.projects}>
          <ProjectCarousel />
        </div>
      </Box>
    </>
  );
}
