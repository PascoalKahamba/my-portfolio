import { Box } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainTitle from "../components/mainTitle";
import { nameDeveloperAtom } from "../atoms";
import { useAtom } from "jotai";

const Contact = () => {
  const { pathname } = useRouter();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("contacts");
  console.log(pathname);

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
      </Box>{" "}
    </>
  );
};

export default Contact;
