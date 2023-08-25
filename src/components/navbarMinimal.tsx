import { Navbar, createStyles, Stack, Box, rem, px } from "@mantine/core";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
} from "lucide-react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[5]
          : theme.colors.blue[3],
    },
  },

  email: {
    position: "fixed",
    display: "flex",
    left: rem(43),
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    zIndex: 999,
    height: rem(20),
    width: rem(20),
    backgroundColor: "transparent",
  },

  emailChild: {
    height: rem(50),
    width: rem(50),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transform: "rotate(90deg) translateX(-100px)",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[5]
          : theme.colors.blue[3],
    },
  },

  navbar: {
    position: "fixed",
    left: rem(960),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    zIndex: 999,
    height: rem(20),
    width: rem(20),
    backgroundColor: "transparent",
  },

  lineBottom: {
    width: px(2),
    height: "50vh",
    alignSelf: "center",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },

  active: {
    "&, &:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const mockdata = [
  { Icon: GithubIcon, link: "Home" },
  { Icon: LinkedinIcon, link: "Dashboard" },
  { Icon: FacebookIcon, link: "Analytics" },
  { Icon: InstagramIcon, link: "Releases" },
  { Icon: TwitterIcon, link: "Account" },
];

export default function NavbarMinimal() {
  const { classes } = useStyles();

  return (
    <Box component="div">
      <Navbar
        height={500}
        width={{ base: 80 }}
        p="ls"
        className={classes.navbar}
      >
        <Navbar.Section mt={300}>
          <Stack justify="center" spacing={0}>
            <Link href="#">
              <a target="_blank" className={classes.emailChild}>
                pascoalkahamba25@gmail.com
              </a>
            </Link>
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack
            justify="center"
            spacing={0}
            className={classes.lineBottom}
          ></Stack>
        </Navbar.Section>
      </Navbar>

      <Navbar
        height={500}
        width={{ base: 80 }}
        p="ls"
        className={classes.email}
      >
        <Navbar.Section mt={105}>
          <Stack justify="center" spacing={0}>
            {mockdata.map(({ Icon, link }) => (
              <Link href={link} key={link}>
                <a target="_blank" className={classes.link}>
                  <Icon size="1.2rem" />
                </a>
              </Link>
            ))}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack
            justify="center"
            spacing={0}
            className={classes.lineBottom}
          ></Stack>
        </Navbar.Section>
      </Navbar>
    </Box>
  );
}
