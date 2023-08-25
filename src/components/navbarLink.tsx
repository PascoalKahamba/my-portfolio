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
  px,
} from "@mantine/core";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  LucideIcon,
} from "lucide-react";

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
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "fixed",
    backgroundColor: "transparent",
    width: "100vw",
    height: "100vh",
    zIndex: 10,
  },

  navbar: {
    position: "fixed",
    left: rem(970),
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    border: "none",
    zIndex: 999,
    height: rem(20),
    width: rem(20),
    backgroundColor: "transparent",
  },

  email: {
    position: "fixed",
    display: "flex",
    left: rem(43),
    flexDirection: "column",
    alignItems: "end",
    border: "none",
    zIndex: 999,
    height: rem(20),
    width: rem(20),
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
    <Box component="div">
      <Navbar
        height={500}
        width={{ base: 80 }}
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
        height={500}
        width={{ base: 80 }}
        p="ls"
        className={classes.email}
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
