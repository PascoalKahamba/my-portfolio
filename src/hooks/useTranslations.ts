import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function useTranslations() {
  const { t: translate } = useTranslation("footer");

  const description = translate("description");
  const user = {
    userName: "Pascoal",
    lastName: "Kahamba",
    dateOfBirth: {
      date: "25",
      mounth: "April",
    },
  };

  const newUser = structuredClone(user);

  return { description };
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["footer"])),
    },
  };
};
