import { Box, createStyles } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";
import NavbarMinimal from "./navbarMinimal";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  layout: {
    padding: "0px 6rem",
  },
}));

const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("footer");

  const footLinks = [
    {
      title: translate("navigation"),
      links: [
        { label: translate("home"), link: "/" },
        { label: translate("about"), link: "./about" },
        { label: translate("journey"), link: "./journey" },
        { label: translate("projects"), link: "./projects" },
        { label: translate("contacts"), link: "./contact" },
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
  const mainLinks = [
    {
      label: translate("home"),
      link: "/",
    },
    {
      label: translate("about"),
      link: "./about",
    },
    {
      label: translate("journey"),
      link: "./journey",
    },
    {
      label: translate("projects"),
      link: "./projects",
    },
    {
      label: translate("contacts"),
      link: "./contact",
    },
  ];
  return (
    <Box component="section" className={classes.layout}>
      <NavbarMinimal />
      <HeaderMegaMenu mainLinks={mainLinks} />
      {children}
      <FooterLinks data={footLinks} />
    </Box>
  );
};

export default Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["footer"])),
    },
  };
};
