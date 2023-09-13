import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {
  Box,
  Button,
  Group,
  Image,
  Text,
  Title,
  createStyles,
  px,
  rem,
} from "@mantine/core";
import { DownloadIcon, PhoneCall } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import translations from "../../locales/en/useExternalLink";

const useStyles = createStyles((theme) => ({
  flexContenier: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  aboutMe: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },

  h1Child: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.gray[5],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(34),
    paddingLeft: rem(28),
    paddingRight: rem(28),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },

  links: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  pictureDad: {
    width: rem(250),
  },
  picture: {
    width: "100%",
    border: `double .7rem ${theme.colors.gray[3]}`,
    borderRadius: px(6),
  },

  buttonIcon: {
    marginLeft: px(6),
  },

  briefDeveloper: {
    flex: "0 1 25rem",
  },

  description: {
    color: theme.white[0],
  },
}));

const About = () => {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("about");
  const { locale } = useRouter();

  const {
    frontendAndbackend,
    javascript,
    programmingLogic,
    html5,
    css3,
    catumbela,
    visualg,
  } = translations;

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <Box component="section" className={classes.flexContenier}>
        <div className={classes.aboutMe}>
          <div
            data-aos="fade-right"
            className={classes.briefDeveloper}
            data-aos-duration="1200"
          >
            <Title order={2} mt="md" className={classes.h1Child}>
              {translate("page-title")}
            </Title>
            <div>
              <Text fz="lg" c="dimmed" mt="sm">
                {translate("about-me")}
                <Link href={frontendAndbackend}>
                  <a target="_blank" className={classes.links}>
                    {translate("my-skill")}
                  </a>
                </Link>
              </Text>
            </div>

            <Group className={classes.controls}>
              <Button
                component="a"
                target="_blank"
                href="https://github.com/PascoalKahamba"
                size="xs"
                variant="gradient"
                className={classes.control}
                leftIcon={
                  <PhoneCall size={12} className={classes.buttonIcon} />
                }
              >
                {translate("contact")}
              </Button>

              <Button
                component="a"
                target="_blank"
                href={`/curriculo-frontend-kahamba.${locale}.pdf`}
                download="curriculo-frontend-kahamba"
                size="xs"
                className={classes.control}
                variant="subtle"
                gradient={{ from: "blue", to: "cyan" }}
                leftIcon={
                  <DownloadIcon size={12} className={classes.buttonIcon} />
                }
              >
                {translate("button-name")}
              </Button>
            </Group>
          </div>
          <div
            className={classes.pictureDad}
            data-aos="flip-left"
            data-aos-duration="1400"
          >
            <Image
              src="/my-photo.jpg"
              alt="developer-picture"
              className={classes.picture}
            />
          </div>
          <Text fz="xl" mt="sm" className={classes.description}>
            {translate("my-name")} <strong>Pascoal Kahamba</strong>{" "}
            {translate("my-name1")}{" "}
            <Link href={frontendAndbackend}>
              <a className={classes.links} target="_blank">
                {translate("my-skill")}
              </a>
            </Link>{" "}
            {translate("focus")}
            {""}{" "}
            <Link href={javascript}>
              <a className={classes.links} target="_blank">
                JavaScript
              </a>
            </Link>
            . {translate("start-study")}{" "}
            <Link href={javascript}>
              <a className={classes.links} target="_blank">
                2018
              </a>
            </Link>
            , {translate("during")} <strong>{translate("high-school")}</strong>{" "}
            {translate("when-college")}{" "}
            <Link href={programmingLogic}>
              <a className={classes.links} target="_blank">
                {translate("programming-logic")}
              </a>
            </Link>{" "}
            {translate("using")}{" "}
            <Link href={visualg}>
              <a className={classes.links} target="_blank">
                Visual G
              </a>
            </Link>
            . {translate("short-desc")}{" "}
            <Link href={html5}>
              <a className={classes.links} target="_blank">
                HTML5
              </a>
            </Link>
            ,{" "}
            <Link href={css3}>
              <a className={classes.links} target="_blank">
                CSS3
              </a>
            </Link>{" "}
            {translate("and")}{" "}
            <Link href={javascript}>
              <a className={classes.links} target="_blank">
                JavaScript
              </a>
            </Link>
            , {translate("final-desc")}
            <p>
              {translate("short-born")} <strong>25/04/2002 (21 anos)</strong> ,
              {translate("longer-born")}{" "}
              <Link href={catumbela}>
                <a className={classes.links} target="_blank">
                  Angola, Benguela, Catumbela
                </a>
              </Link>
              .
            </p>
            <p>{translate("about-job")}</p>
            <p>{translate("my-habits")}</p>
          </Text>
        </div>
      </Box>
    </>
  );
};

export default About;
