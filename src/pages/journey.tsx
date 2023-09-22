import { Box, Text, createStyles, rem } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainTitle from "../components/mainTitle";
import Link from "next/link";
import GlobalTitle from "../components/globalTitle";
import MyTimeline from "../components/myTimeline";

const useStyles = createStyles((theme) => ({
  description: {
    width: rem(750),
    margin: "0 auto",
    whiteSpace: "normal",
  },

  links: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const journey2018 = [
  {
    title: "Começo de tudo Ingresso do ensino médio.",
    description:
      "Comecei a estudar Logica de Programação no canal Curso em Video.",
    date: "Janeiro a dois anos atras.",
    dataAos: "fade-left",
  },
  {
    title: "Começei a estudar Lógica de Programação.",
    description:
      "Comecei a estudar Logica de Programação no canal Curso em Video.",
    date: "Janeiro a dois anos atras.",
    dataAos: "fade-right",
  },
  {
    title: "Começei a estudar Lógica de Programação.",
    description:
      "Comecei a estudar Logica de Programação no canal Curso em Video.",
    date: "Janeiro a dois anos atras.",
    dataAos: "fade-left",
  },
  {
    title: "Começei a estudar Lógica de Programação.",
    description:
      "Comecei a estudar Logica de Programação no canal Curso em Video.",
    date: "Janeiro a dois anos atras.",
    dataAos: "fade-right",
  },
];

export default function Journey() {
  const { t: translate } = useTranslation("journey");
  const { classes } = useStyles();

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
          <p>
            {translate("short-journey")}{" "}
            <Link href="">
              <a className={classes.links} target="_blank">
                2018
              </a>
            </Link>{" "}
            , {translate("more-journey")}
          </p>
          <p>{translate("paragraph")}</p>
        </Text>
        <GlobalTitle title={translate("timeline")} width={205} />
        <MyTimeline myJourney={journey2018} />
      </Box>
    </>
  );
}
