import { Box, MantineProvider } from "@mantine/core";
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
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <HeaderMegaMenu />
      {children}
      <FooterLinks data={footLinks} />
    </MantineProvider>
  );
};

export default Layout;
