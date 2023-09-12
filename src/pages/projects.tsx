import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Projects = () => {
  const { pathname } = useRouter();
  const { t: translate } = useTranslation("projects");
  console.log(pathname);

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <div>Projects</div>;
    </>
  );
};

export default Projects;
