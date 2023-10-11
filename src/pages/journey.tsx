import { Box, Text } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

import React from "react";
import MainTitle from "../components/mainTitle";
import Link from "next/link";
import GlobalTitle from "../components/globalTitle";
import MyTimeline from "../components/myTimeline";
import Alldata from "../../contents/alldata";
import useTimeline from "../hooks/useTimeline";
import classes from "../styles/journey.module.css";
import { useAtom } from "jotai";
import { nameDeveloperAtom } from "../atoms";

export default function Journey() {
  const { t: translate } = useTranslation("journey");
  const [nameDeveloper] = useAtom(nameDeveloperAtom);

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
        <MyTimeline />
      </Box>
    </>
  );
}
