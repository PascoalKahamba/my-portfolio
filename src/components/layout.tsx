import { Box, createStyles } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";
import NavbarMinimal from "./navbarMinimal";
import useMounted from "../hooks/useMounted";

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  layout: {
    padding: "0px 6rem",
  },
}));

export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();
  const mounted = useMounted();

  console.log(mounted);

  return (
    <Box component="section" className={classes.layout}>
      <NavbarMinimal />
      <HeaderMegaMenu />
      {children}
      <FooterLinks />
    </Box>
  );
}
