import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  rem,
} from "@mantine/core";
import axios from "axios";
import { GithubIcon, DownloadIcon } from "lucide-react";
import Link from "next/link";
import { assert } from "node:console";
import { describe } from "node:test";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    axios.get(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4gbghQxKQ00p3xIvyMBXBgGmChzLSh1VQId1oyhYrgir1bkn812dc1LwOgnajgWd-Yo&usqp=CAU"
    );
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <span className={classes.spanTitle}>Olá, meu nome é </span>
        <h1 className={classes.title}>
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Pascoal Kahamba
          </Text>{" "}
          Desenvolvedor Front-End
        </h1>

        <Text className={classes.description} color="dimmed">
          Entusiasta do desenvolvimento de software com uma paixão ardente pelo
          aprimoramento contínuo. Especializado na criação de sistemas web de
          alto desempenho, atualmente desempenhando o papel de{" "}
          <Link href="https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end">
            <a className={classes.links} target="_blank">
              Desenvolvedor Front-End
            </a>
          </Link>
          . Minha abordagem se baseia na stack principal de{" "}
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
            href="https://github.com/PascoalKahamba/my-portfolio/blob/main/public/curriculo-frontend-kahamba.pt.pdf"
            download="curriculo-frontend-kahamba"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftIcon={<DownloadIcon size={20} />}
          >
            Baixar CV
          </Button>

          <Button
            component="a"
            target="_blank"
            href="https://github.com/PascoalKahamba"
            size="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
