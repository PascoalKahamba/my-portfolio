import { Box, Text, createStyles } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

import React from "react";
import MainTitle from "../components/mainTitle";
import GlobalTitle from "../components/globalTitle";
import ProjectCard from "../components/projectCard";

const useStyles = createStyles((theme) => ({
  projects: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Projects = () => {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("projects");

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <Box component="section">
        <MainTitle
          title={translate("page-title")}
          dataAos="zoom-in"
          dataAosDuration={1200}
        />
        <Text fz="xl" mt="sm" data-aos="fade-right" data-aos-duration="1200">
          Durante minha trajetória, desenvolvi diversos projetos profissionais,
          sempre buscando alavancar minha carreira por meio da utilização das
          mais recentes tecnologias do mercado. Abaixo, apresento alguns dos
          meus projetos.{" "}
        </Text>
        <GlobalTitle title={translate("page-title")} width={300} />
        <div className={classes.projects}>
          <ProjectCard />
        </div>
      </Box>{" "}
    </>
  );
};

export default Projects;
