import { Box, createStyles } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";
import NavbarMinimal from "./navbarMinimal";
import useTranslation from "next-translate/useTranslation";
import ScrollControl from "./scrollControl";
import useMounted from "../hooks/useMounted";

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  layout: {
    padding: "0px 6rem",
    overflowX: "hidden",
  },
}));

export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();

  const { t: translate } = useTranslation("common");

  const mainLinks = [
    {
      label: translate("home"),
      link: "/",
    },
    {
      label: translate("about"),
      link: "/about",
    },
    {
      label: translate("journey"),
      link: "/journey",
    },
    {
      label: translate("projects"),
      link: "/projects",
    },
    {
      label: translate("contacts"),
      link: "/contacts",
    },
  ];

  const data = [
    {
      title: translate("navigation"),
      links: [
        { label: translate("home"), link: "/" },
        { label: translate("about"), link: "/about" },
        { label: translate("journey"), link: "/journey" },
        { label: translate("projects"), link: "/projects" },
        { label: translate("contacts"), link: "/contacts" },
      ],
    },
    {
      title: translate("tecnologies"),
      links: [
        { label: "JavaScript", link: "Pascoal" },
        { label: "TypeScript", link: "Pascoal" },
        { label: "React.js", link: "Pascoal" },
        { label: "Next.js", link: "Pascoal" },
      ],
    },
    {
      title: translate("journey"),
      links: [
        { label: "2023", link: "Pascoal" },
        { label: "2022", link: "Pascoal" },
        { label: "2021", link: "Pascoal" },
        { label: "2020", link: "Pascoal" },
      ],
    },
  ];
  const mounted = useMounted();

  return (
    <Box component="section" className={classes.layout}>
      <HeaderMegaMenu mainLinks={mainLinks} />
      <NavbarMinimal kindOfNavbar="socialMedia" />
      <NavbarMinimal kindOfNavbar="email" />
      {children}
      <FooterLinks data={data} />
      {mounted && <ScrollControl />}
    </Box>
  );
}
