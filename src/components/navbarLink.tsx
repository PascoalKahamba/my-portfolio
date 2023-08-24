import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Box,
  rem,
} from "@mantine/core";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  FacebookIcon,
  LucideIcon,
} from "lucide-react";
import { ClassNames } from "@emotion/react";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  navContanier: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    msAlignSelf: "end",
    padding: rem(0),
    position: "fixed",
    backgroundColor: "transparent",
    width: rem(890),
    height: "100vh",
    zIndex: 9999,
  },

  navbar: {
    border: "none",
    backgroundColor: "transparent",
  },

  active: {
    "&, &:hover": {
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

export function NavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 1 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: GithubIcon, label: "Home" },
  { icon: LinkedinIcon, label: "Dashboard" },
  { icon: FacebookIcon, label: "Analytics" },
  { icon: InstagramIcon, label: "Releases" },
  { icon: TwitterIcon, label: "Account" },
];

export default function NavbarMinimal() {
  const [active, setActive] = useState(2);
  const { classes, cx } = useStyles();

  const links = mockdata.map((link, index) => (
    <NavbarLink {...link} key={link.label} onClick={() => setActive(index)} />
  ));

  return (
    <Box component="div" className={classes.navContanier}>
      <Navbar
        height={400}
        width={{ base: "none" }}
        p="ls"
        className={classes.navbar}
      >
        <Navbar.Section mt={140}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink icon={InstagramIcon} label="Change account" />
            <NavbarLink icon={TwitterIcon} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>

      <Navbar
        height={400}
        width={{ base: "none" }}
        p="ls"
        className={classes.navbar}
      >
        <Navbar.Section mt={140}>
          <Stack justify="center" spacing={0}>
            {links}
          </Stack>
        </Navbar.Section>
        <Navbar.Section>
          <Stack justify="center" spacing={0}>
            <NavbarLink icon={InstagramIcon} label="Change account" />
            <NavbarLink icon={TwitterIcon} label="Logout" />
          </Stack>
        </Navbar.Section>
      </Navbar>
    </Box>
  );
}
