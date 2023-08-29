import {
  createStyles,
  Header,
  Group,
  Anchor,
  Box,
  rem,
  px,
} from "@mantine/core";
import LanguagePicker from "./languagePicker";
import ActionToggle from "./actionToggle";
import UserButton from "./userButton";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { activeAtom } from "../atoms";

const useStyles = createStyles((theme) => ({
  headerElement: {
    position: "fixed",
    with: "100%",
    top: px(0),
    zIndex: 100,
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    fontSize: rem(13),
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
    padding: `${rem(20)} ${theme.spacing.sm}`,
    fontWeight: 500,
    borderBottom: `${rem(1)} solid transparent`,
    transition: "border-color 100ms ease, color 100ms ease",

    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
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
}));

interface LinkProps {
  label: string;
  link: string;
}

interface HeaderMegaMenuProps {
  mainLinks: LinkProps[];
}

export default function HeaderMegaMenu({ mainLinks }: HeaderMegaMenuProps) {
  const [active, setActive] = useAtom(activeAtom);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: index === active,
      })}
      onClick={(event) => {
        event.preventDefault();
        router.push(item.link);
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

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
          <Group className={classes.mainLinks}>{mainItems}</Group>
          <Group className={classes.hiddenMobile}>
            <LanguagePicker />
            <ActionToggle />
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
