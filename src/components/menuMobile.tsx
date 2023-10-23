import { Anchor, Box, createStyles, rem } from "@mantine/core";
import React from "react";
import Alldata from "../../contents/alldata";
import Link from "next/link";
import LanguagePicker from "./languagePicker";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  contanier: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(2),
    zIndex: 9999,
    top: rem(60),
    left: 0,
    right: 0,
    width: "100vw",
    height: "100vh",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
    fontWeight: 500,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: rem(2),
    marginBottom: rem(10),
  },

  chooseLanguage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `${rem(2)} solid ${theme.colors.gray[5]}`,
  },

  mainLinks: {
    fontSize: rem(13),
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[6],
    padding: `${rem(8)} ${theme.spacing.sm}`,
    fontWeight: 500,
    borderBottom: `${rem(1)} solid transparent`,
    transition: "border-color 100ms ease, color 100ms ease",
    borderRadius: rem(5),
    width: "50%",
    textAlign: "center",
    "&:hover": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[4],
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    Width: rem(1),
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6],
    },
  },
}));

interface MenuMobileProps {
  toggle: () => void;
}

export default function MenuMobile({ toggle }: MenuMobileProps) {
  const { mainLinks } = Alldata();
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();

  const mainItems = mainLinks.map((item) => (
    <Link key={item.label} href={item.link}>
      <Anchor<"a">
        href={item.link}
        component="a"
        onClick={toggle}
        className={cx(classes.mainLinks, {
          [classes.mainLinkActive]: item.link === pathname,
        })}
      >
        {item.label}
      </Anchor>
    </Link>
  ));
  return (
    <Box
      component="section"
      className={classes.contanier}
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      <div className={classes.main}>{mainItems}</div>
      <div className={classes.chooseLanguage}>
        <LanguagePicker />
      </div>
    </Box>
  );
}
