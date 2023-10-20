import { Anchor, createStyles, rem } from "@mantine/core";
import React from "react";
import Alldata from "../../contents/alldata";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  mainLink: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: rem(2),
    zIndex: 999,
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

  links: {
    width: "100%",
    fontSize: rem(13),
    textAlign: "center",
    transition: "border-color 100ms ease, color 100ms ease",
    padding: `${rem(8)} ${theme.spacing.sm}`,
    "&:hover": {
      textDecoration: "none",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[4],
    },
  },
}));

interface MenuMobileProps {
  toggle: () => void;
}

export default function MenuMobile({ toggle }: MenuMobileProps) {
  const { mainLinks } = Alldata();
  const { classes } = useStyles();

  const mainItems = mainLinks.map((item) => (
    <Link key={item.label} href={item.link}>
      <Anchor<"a">
        href={item.link}
        component="a"
        onClick={toggle}
        className={classes.links}
      >
        {item.label}
      </Anchor>
    </Link>
  ));
  return (
    <section
      className={classes.mainLink}
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      {mainItems}
    </section>
  );
}
