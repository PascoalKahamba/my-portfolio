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

const useStyles = createStyles((theme) => ({
  projects: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(30),
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
  const { financialImages, financialTechnologies } = Alldata();

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
          <ProjectCarousel
            vercelLink={projectfinancialmanagervercel}
            githubLink={projectfinancialmanagergithub}
            name="Gestor Financeiro"
            status="Concluido"
            technologies={financialTechnologies}
            images={financialImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            vercelLink={projectnewcrudvercel}
            githubLink={projectnewcrudgithub}
            name="CRUD Moderno"
            status="Concluido"
            technologies={financialTechnologies}
            images={financialImages}
            dataAos="fade-left"
          />
          <ProjectCarousel
            vercelLink={projectstudentstatisticsvercel}
            githubLink={projectstudentstatisticsgithub}
            name="Estatisticas dos Alunos"
            status="Concluido"
            technologies={financialTechnologies}
            images={financialImages}
            dataAos="fade-right"
          />
          <ProjectCarousel
            vercelLink={projectfindfivevercel}
            githubLink={projectfindfivegithub}
            name="Acha-5"
            status="Concluido"
            technologies={financialTechnologies}
            images={financialImages}
            dataAos="fade-left"
          />
        </div>
      </Box>
    </>
  );
}
