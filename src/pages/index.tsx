import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  rem,
  px,
} from "@mantine/core";
import { GithubIcon, DownloadIcon } from "lucide-react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.black[0] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: rem(20),
    paddingBottom: rem(100),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  spanTitle: {
    fontWeight: 600,
    fontStyle: "italic",
    color: theme.colors.gray[6],
    fontSize: theme.spacing.lg,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(52),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
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

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  buttonIcon: {
    marginLeft: px(6),
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

export default function IndexPage() {
  const { classes } = useStyles();
  const { locale } = useRouter();

  const { t: translate } = useTranslation("home");

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <span className={classes.spanTitle}>{translate("hello")}</span>
        <h1 className={classes.title}>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Pascoal Kahamba
          </Text>{" "}
          {translate("my-skill")}
        </h1>
        <Text className={classes.description} color="dimmed">
          {translate("description")}{" "}
          <Link href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end">
            <a className={classes.links} target="_blank">
              {translate("my-skill")}
            </a>
          </Link>
          . {translate("short-description")}{" "}
          <Link href="https://pt.wikipedia.org/wiki/JavaScript">
            <a className={classes.links} target="_blank">
              JavaScript
            </a>
          </Link>{" "}
          /
          <Link href="https://pt.wikipedia.org/wiki/TypeScript">
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
            leftIcon={<DownloadIcon className={classes.buttonIcon} size={20} />}
          >
            {translate("button-name")}{" "}
          </Button>

          <Button
            component="a"
            target="_blank"
            href="https://github.com/PascoalKahamba"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon className={classes.buttonIcon} size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home"])),
    },
  };
};
