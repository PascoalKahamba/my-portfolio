import { Box, Text, createStyles, rem } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import useMedia from "../hooks/useMedia";
import MainTitle from "../components/mainTitle";
import GlobalTitle from "../components/globalTitle";
import MyTimeline from "../components/myTimeline";
import { useAtom } from "jotai";
import { countYearAtom, nameDeveloperAtom } from "../../atoms";
import { scrollToThePlace } from "../components/scrollControl";

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
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
const SCROLL_TO_A_LOCAL_PAGE = 400;
const TIMELINE_2018 = 0;

export default function Journey() {
  const { t: translate } = useTranslation("journey");
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const [_, setCountYear] = useAtom(countYearAtom);
  const { classes } = useStyles();
  const bigScreen = useMedia("(min-width:80rem)");

  function goToTimeline2018() {
    setCountYear(TIMELINE_2018);
    scrollToThePlace(SCROLL_TO_A_LOCAL_PAGE);
  }

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
            <p>
              {translate("short-journey")}{" "}
              <span className={classes.links} onClick={goToTimeline2018}>
                2018
              </span>{" "}
              , {translate("more-journey")}
            </p>
            <p>{translate("paragraph")}</p>
          </Text>
        </div>
        <GlobalTitle title={translate("timeline")} width={205} />
        <MyTimeline />
      </Box>
    </>
  );
}
