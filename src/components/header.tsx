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
import { SwitchToggle } from "./switchToggle";
import { UserButton } from "./userButton";
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
    top: px(0),
    zIndex: 100,
  },

  headerChild: {
    position: "relative",
    top: px(0),
    bottom: px(0),
    right: px(0),
    left: px(0),
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
      <Header height={50} px="md" className={classes.headerElement}>
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
            <SwitchToggle />
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
