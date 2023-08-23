import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  rem,
  px,
} from "@mantine/core";
import Image from "next/image";
import LanguagePicker from "./languagePicker";
import ActionToggle from "./actionToggle";
import UserButton from "./userButton";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  headerElement: {
    position: "fixed",
    with: "100%",
    top: px(0),
    zIndex: 100,
  },

  headerChild: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    with: "100%",
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function HeaderMegaMenu() {
  const { classes, theme } = useStyles();

  return (
    <Box pb={120}>
      <Header height={60} px="md" className={classes.headerElement}>
        <Group
          position="apart"
          sx={{ height: "100%" }}
          className={classes.headerChild}
        >
          <UserButton
            name="Pascoal Kahamba"
            image="/my-photo.jpg"
            skill="Desenvolvedor Front-End"
          />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
              Página Inicial
            </a>
            <a href="#" className={classes.link}>
              Sobre
            </a>
            <a href="#" className={classes.link}>
              Jornada
            </a>
            <a href="#" className={classes.link}>
              Projetos
            </a>
            <a href="#" className={classes.link}>
              Contatos
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <LanguagePicker />
            <ActionToggle />
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
