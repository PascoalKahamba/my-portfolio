import { Box } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainTitle from "../components/mainTitle";

const Projects = () => {
  const { pathname } = useRouter();
  const { t: translate } = useTranslation("projects");
  console.log(pathname);

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
      </Box>{" "}
    </>
  );
};

export default Projects;
