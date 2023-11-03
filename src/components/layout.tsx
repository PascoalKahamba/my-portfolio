import { Box, createStyles, rem } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";
import NavbarMinimal from "./navbarMinimal";
import ScrollControl from "./scrollControl";
import useMounted from "../hooks/useMounted";

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  layout: {
    padding: "0px 6rem",
    overflowX: "hidden",

    [theme.fn.smallerThan("sm")]: {
      padding: "0px 2rem",
      fontSize: theme.spacing.xs,
    },
  },
}));

export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();
  const mounted = useMounted();

  return (
    <Box component="section" className={classes.layout}>
      <HeaderMegaMenu />
      <NavbarMinimal kindOfNavbar="socialMedia" />
      <NavbarMinimal kindOfNavbar="email" />
      {children}
      <FooterLinks />
      {mounted && <ScrollControl />}
    </Box>
  );
}
