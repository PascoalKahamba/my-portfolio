import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const About = () => {
  const { pathname, locale } = useRouter();
  console.log(pathname);

  const { t: translate } = useTranslation("about");

  return (
    <div>
      <h2>{locale}</h2>
      <p>{translate("hello-world")}</p>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["about"])),
    },
  };
};
