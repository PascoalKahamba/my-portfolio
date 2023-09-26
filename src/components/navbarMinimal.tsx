import { Navbar, createStyles, Stack, Box, rem, px } from "@mantine/core";
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    gap: rem(200),
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

  dadElement: {
    position: "fixed",
    width: rem(5),
    height: "100vh",
    zIndex: 666,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  navbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
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
    <Box
      component="div"
      className={classes.dadElement}
      sx={
        kindOfNavbar === "socialMedia" ? { right: rem(50) } : { left: rem(50) }
      }
    >
      {kindOfNavbar === "socialMedia" ? (
        <Navbar p="ls" className={classes.navbar}>
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
        <Navbar p="ls" className={classes.email}>
          <Navbar.Section mt={80}>
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
