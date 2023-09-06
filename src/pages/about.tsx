import React from "react";
import useTranslation from "next-translate/useTranslation";
const About = () => {
  const { t, lang } = useTranslation("about");
  const helloWorld = t("hello-world");

  return (
    <div data-aos="fade-right">
      <p>{helloWorld}</p>
    </div>
  );
};

export default About;
