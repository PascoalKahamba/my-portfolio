import { useState } from "react";
import { MantineProvider, Box, ColorScheme } from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const footLinks = [
    { title: "Kahamba", links: [{ label: "Ndonid", link: "Pascoal" }] },
  ];
  return (
    <Box component="section">
      <HeaderMegaMenu />
      {children}
      <FooterLinks data={footLinks} />
    </Box>
  );
};

export default Layout;
