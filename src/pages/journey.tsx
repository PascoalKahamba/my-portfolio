import { Box, Text, createStyles } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainTitle from "../components/mainTitle";
import Link from "next/link";
import GlobalTitle from "../components/globalTitle";

const useStyles = createStyles((theme) => ({
  description: {
    color: theme.white[5],
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

const Journey = () => {
  const { pathname } = useRouter();
  const { t: translate } = useTranslation("journey");
  const { classes } = useStyles();
  console.log(pathname);

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <Box component="section">
        <MainTitle title="Jornada" dataAos="zoom-in" dataAosDuration={1200} />

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
      </Box>
    </>
  );
};

export default Journey;
