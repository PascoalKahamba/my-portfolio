import { Box } from "@mantine/core";
import React from "react";
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
