import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import HeaderMegaMenu from "./header";
import FooterLinks from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const footLinks = [
    { title: "Kahamba", links: [{ label: "Ndonid", link: "Pascoal" }] },
  ];
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <HeaderMegaMenu />
        {children}
        <FooterLinks data={footLinks} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Layout;
