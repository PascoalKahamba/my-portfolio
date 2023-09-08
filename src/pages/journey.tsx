import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Journey = () => {
  const { pathname } = useRouter();
  const { t: translate } = useTranslation("journey");
  console.log(pathname);

  return (
    <>
      <Head>
        <title>{translate("page-title")} - Pascoal Kahamba</title>
      </Head>
      <div>Journey</div>;
    </>
  );
};

export default Journey;
