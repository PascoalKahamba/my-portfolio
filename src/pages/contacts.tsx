import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Contact = () => {
  const { pathname } = useRouter();
  const { t: translate } = useTranslation("contacts");
  console.log(pathname);

  return (
    <>
      <Head>
        <title>{translate("page-title")} - Pascoal Kahamba</title>
      </Head>
      <div>Contacts</div>
    </>
  );
};

export default Contact;
