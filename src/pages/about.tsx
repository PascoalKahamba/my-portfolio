import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

const About = () => {
  const { t: translate } = useTranslation("about");

  return (
    <div>
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
