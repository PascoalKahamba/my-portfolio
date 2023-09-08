import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
const About = () => {
  const { t: translate } = useTranslation("about");

  return (
    <>
      <Head>
        <title>{translate("page-title")} - Pascoal Kahamba</title>
      </Head>
      <div data-aos="fade-right">
        <p>{translate("hello-world")}</p>
      </div>
    </>
  );
};

export default About;
