import {
  Navbar,
  createStyles,
  Stack,
  Box,
  rem,
  px,
  getBreakpointValue,
  em,
} from "@mantine/core";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";
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
    right: rem(840),
    zIndex: 666,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    backgroundColor: "transparent",

    // [theme.fn.smallerThan("sm")]: {
    //   right: rem(1200),
    // },

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
      {
        right: rem(1200),
        backgroundColor: theme.colors.pink[6],
      },
  },

  emailChild: {
    width: rem(650),
    display: "flex",
    alignItems: "center",
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
    left: rem(840),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    zIndex: 666,
    backgroundColor: "transparent",

    // [theme.fn.smallerThan("sm")]: {
    //   left: rem(1200),
    // },

    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]:
      {
        left: rem(1200),
        backgroundColor: theme.colors.pink[6],
      },
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
  { Icon: GithubIcon, link: "https://github.com/PascoalKahamba" },
  {
    Icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/pascoal-kahamba-7b43bb233/",
  },
  { Icon: FacebookIcon, link: "https://web.facebook.com/PascoalKahamba/" },
  { Icon: InstagramIcon, link: "https://www.instagram.com/pascoalkahamba/" },
  { Icon: BsDiscord, link: "https://discord.com/channels/@me" },
];

interface KindOfNavbarProps {
  kindOfNavbar: "email" | "socialMedia";
}

export default function NavbarMinimal({ kindOfNavbar }: KindOfNavbarProps) {
  const { classes } = useStyles();

  return (
    <Box component="div">
      {kindOfNavbar === "socialMedia" ? (
        <Navbar
          height={500}
          width={{ base: 80 }}
          p="ls"
          className={classes.navbar}
        >
          <Navbar.Section mt={80}>
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
      ) : (
        <Navbar
          height={500}
          width={{ base: 80 }}
          p="ls"
          className={classes.email}
        >
          <Navbar.Section mt={300}>
            <Stack justify="center" spacing={0}>
              <Link href="mailto://pascoalkahamba25@gmail.com">
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
      )}
    </Box>
  );
}
