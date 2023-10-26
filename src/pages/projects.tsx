import { Box, Text, rem, createStyles } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import MainTitle from "../components/mainTitle";
import GlobalTitle from "../components/globalTitle";
import { nameDeveloperAtom } from "../../atoms";
import { useAtom } from "jotai";
import ProjectCarousel from "../components/projectCarousel";
import Alldata from "../../contents/alldata";
import translations from "../../locales/en/useExternalLink";
import useMedia from "../hooks/useMedia";

const useStyles = createStyles((theme) => ({
  projects: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(30),
  },

  description: {
    width: rem(750),
    margin: "0 auto",
    whiteSpace: "normal",
  },
}));

const {
  projectfinancialmanagervercel,
  projectfinancialmanagergithub,
  projectstudentstatisticsvercel,
  projectnewcrudvercel,
  projectfindfivegithub,
  projectfindfivevercel,
  projectstudentstatisticsgithub,
  projectnewcrudgithub,
} = translations;

export default function Projects() {
  const { classes } = useStyles();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("projects");
  const bigScreen = useMedia("(min-width:80rem)");
  const {
    financialImages,
    financialTechnologies,
    crudTechnologies,
    crudImages,
    findFiveImages,
    findFiveTechnologies,
    studentStatisticsImages,
    studentStatisticsTechnologies,
  } = Alldata();

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <Box component="section">
        <div className={`${bigScreen && classes.description}`}>
          <MainTitle
            title={translate("page-title")}
            dataAos="zoom-in"
            dataAosDuration={1200}
          />
          <Text fz="xl" mt="sm" data-aos="fade-right" data-aos-duration="1200">
            {translate("about-project")}
          </Text>
        </div>
        <GlobalTitle title={translate("page-title")} width={300} />
        <div className={classes.projects}>
          <ProjectCarousel
            vercelLink={projectfinancialmanagervercel}
            githubLink={projectfinancialmanagergithub}
            name={translate("financial-manager")}
            status={translate("status")}
            technologies={financialTechnologies}
            images={financialImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            vercelLink={projectnewcrudvercel}
            githubLink={projectnewcrudgithub}
            name={translate("crud")}
            status={translate("status")}
            technologies={crudTechnologies}
            images={crudImages}
            dataAos="fade-left"
          />
          <ProjectCarousel
            vercelLink={projectstudentstatisticsvercel}
            githubLink={projectstudentstatisticsgithub}
            name={translate("students-statistics")}
            status={translate("status")}
            technologies={studentStatisticsTechnologies}
            images={studentStatisticsImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            vercelLink={projectfindfivevercel}
            githubLink={projectfindfivegithub}
            name={translate("find-5")}
            status={translate("status")}
            technologies={findFiveTechnologies}
            images={findFiveImages}
            dataAos="fade-left"
          />
        </div>
      </Box>
    </>
  );
}
