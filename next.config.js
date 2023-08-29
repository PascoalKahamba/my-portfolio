/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
  },
};

module.exports = nextConfig;
