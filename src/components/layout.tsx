import { Box, createStyles } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";
import NavbarMinimal from "./navbarMinimal";
import ScrollControl from "./scrollControl";
import useMounted from "../hooks/useMounted";
import classes from "../styles/layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
