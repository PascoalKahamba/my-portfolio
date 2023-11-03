import { Box, Text } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import React from "react";
import MainTitle from "../components/mainTitle";
import { nameDeveloperAtom } from "../../atoms";
import { useAtom } from "jotai";
import GlobalTitle from "../components/globalTitle";
import ElementsOfContacts from "../components/elementsOfContacts";
import classes from "../styles/contacts.module.css";

const Contact = () => {
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("contacts");

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <Box component="section" className={classes.contanier}>
        <div className={classes.contacts}>
          <MainTitle
            title={translate("page-title")}
            dataAos="zoom-in"
            dataAosDuration={1200}
          />
          <Text mt="sm" data-aos="fade-right" data-aos-duration="1200">
            {translate("about-contacts")}
          </Text>
        </div>
        <GlobalTitle title={translate("page-title")} width={300} />
        <ElementsOfContacts />
      </Box>
    </>
  );
};

export default Contact;
