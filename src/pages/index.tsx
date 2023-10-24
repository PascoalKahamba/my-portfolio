import { Container, Text, Button, Group } from "@mantine/core";
import { useMemo, useCallback } from "react";
import { GithubIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Head from "next/head";
import translations from "../../locales/en/useExternalLink";
import { nameDeveloperAtom } from "../../atoms";
import { useAtom } from "jotai";
import classes from "../styles/index.module.css";

const { frontEnd, github, javascript, typescript } = translations;

export default function IndexPage() {
  const { locale } = useRouter();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("home");

  return (
    <>
      <Head>
        <title>
          {translate("page-title")} | {nameDeveloper}
        </title>
      </Head>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <span
            className={classes.spanTitle}
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            {translate("hello")}
          </span>
          <h1
            className={classes.title}
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              Pascoal Kahamba
            </Text>{" "}
            <br />
            {translate("my-skill")}
          </h1>
          <Text
            className={classes.description}
            color="dimmed"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            {translate("description")}{" "}
            <Link href={frontEnd}>
              <a className={classes.links} target="_blank">
                {translate("my-skill")}
              </a>
            </Link>
            . {translate("short-description")}{" "}
            <Link href={javascript}>
              <a className={classes.links} target="_blank">
                JavaScript
              </a>
            </Link>{" "}
            /
            <Link href={typescript}>
              <a className={classes.links} target="_blank">
                TypeScript
              </a>
            </Link>
            .
          </Text>

          <Group className={classes.controls}>
            <Button
              component="a"
              target="_blank"
              href={`/curriculo-frontend-kahamba.${locale}.pdf`}
              download="curriculo-frontend-kahamba"
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              leftIcon={
                <DownloadIcon className={classes.buttonIcon} size={20} />
              }
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              {translate("button-name")}{" "}
            </Button>

            <Button
              component="a"
              target="_blank"
              href={github}
              size="xl"
              variant="default"
              data-aos="fade-left"
              data-aos-duration="1200"
              className={classes.control}
              leftIcon={<GithubIcon className={classes.buttonIcon} size={20} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </div>
    </>
  );
}
