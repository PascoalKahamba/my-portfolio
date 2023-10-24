import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {
  Box,
  Button,
  Group,
  Image,
  Skeleton,
  Text,
  px,
  rem,
} from "@mantine/core";
import { DownloadIcon, PhoneCall } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import translations from "../../locales/en/useExternalLink";
import Technologias from "../components/technologies";
import MainTitle from "../components/mainTitle";
import Alldata from "../../contents/alldata";
<<<<<<< HEAD
import { nameDeveloperAtom } from "../../atoms";
=======
import { nameDeveloperAtom } from "../atoms";
import classes from "../styles/about.module.css";
>>>>>>> 1f8b706ae6cf18456ff092049ff487a1ef195cd3
import { useAtom } from "jotai";

const {
  frontendAndbackend,
  javascript,
  programmingLogic,
  html5,
  css3,
  catumbela,
  visualg,
} = translations;

export default function About() {
  const { t: translate } = useTranslation("about");
  const { locale } = useRouter();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { frontEndSkiils, otherTechnologies } = Alldata();
  const currentYear = new Date().getFullYear();
  const myAge = currentYear - 2002;

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <Box component="section" className={classes.flexContenier}>
        <div className={classes.aboutMe}>
          <div
            data-aos="fade-right"
            className={classes.briefDeveloper}
            data-aos-duration="1200"
          >
            <MainTitle title={translate("page-title")} />
            <div>
              <Text fz="lg" mt="sm">
                {translate("about-me")}
                <Link href={frontendAndbackend}>
                  <a target="_blank" className={classes.links}>
                    {translate("my-skill")}
                  </a>
                </Link>
              </Text>
            </div>

            <Group className={classes.controls}>
              <Link href="/contacts">
                <Button
                  size="xs"
                  component="a"
                  href="/contacts"
                  variant="gradient"
                  className={classes.control}
                  leftIcon={
                    <PhoneCall size={12} className={classes.buttonIcon} />
                  }
                >
                  {translate("contact")}
                </Button>
              </Link>
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
        </div>
        <div
          className={classes.description}
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <Text fz="xl" mt="sm">
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
              {translate("short-born")}{" "}
              <strong>25/04/2002 ( {myAge} anos)</strong> ,
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
        <Technologias job="FRONT-END" skills={frontEndSkiils} width={250} />
        <Technologias
          job={translate("other-technologies")}
          skills={otherTechnologies}
          width={165}
        />
      </Box>
    </>
  );
}
