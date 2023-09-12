import React from "react";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {
  Box,
  Button,
  Group,
  Image,
  Text,
  Title,
  createStyles,
  px,
  rem,
} from "@mantine/core";
import { DownloadIcon, PhoneCall } from "lucide-react";
import { useRouter } from "next/router";
import Link from "next/link";
import translations from "../../locales/en/useExternalLink";

const useStyles = createStyles((theme) => ({
  flexContenier: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  aboutMe: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
  },

  h1Child: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.gray[5],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(34),
    paddingLeft: rem(28),
    paddingRight: rem(28),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },

  links: {
    color: theme.colors.blue[4],
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  pictureDad: {
    width: rem(250),
  },
  picture: {
    width: "100%",
    border: `double .7rem ${theme.colors.gray[3]}`,
    borderRadius: px(6),
  },

  buttonIcon: {
    marginLeft: px(6),
  },

  briefDeveloper: {
    flex: "0 1 25rem",
  },

  description: {
    color: theme.white[0],
  },

  boldClass: {
    fontWeight: "bold",
  },
}));

const About = () => {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("about");
  const { locale } = useRouter();

  const { frontendAndbackend, javascript } = translations;

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <Box component="section" className={classes.flexContenier}>
        <div className={classes.aboutMe}>
          <div data-aos="fade-right" className={classes.briefDeveloper}>
            <Title order={2} mt="md" className={classes.h1Child}>
              {translate("page-title")}
            </Title>
            <div>
              <Text fz="lg" c="dimmed" mt="sm">
                {translate("about-me")}
                <Link href={frontendAndbackend}>
                  <a target="_blank" className={classes.links}>
                    {translate("my-skill")}
                  </a>
                </Link>
              </Text>
            </div>

            <Group className={classes.controls}>
              <Button
                component="a"
                target="_blank"
                href="https://github.com/PascoalKahamba"
                size="xs"
                variant="gradient"
                className={classes.control}
                leftIcon={
                  <PhoneCall size={12} className={classes.buttonIcon} />
                }
              >
                {translate("contact")}
              </Button>

              <Button
                component="a"
                target="_blank"
                href={`/curriculo-frontend-kahamba.${locale}.pdf`}
                download="curriculo-frontend-kahamba"
                size="xs"
                className={classes.control}
                variant="subtle"
                gradient={{ from: "blue", to: "cyan" }}
                leftIcon={
                  <DownloadIcon size={12} className={classes.buttonIcon} />
                }
              >
                {translate("button-name")}
              </Button>
            </Group>
          </div>
          <div className={classes.pictureDad} data-aos="flip-left">
            <Image
              src="/my-photo.jpg"
              alt="developer-picture"
              className={classes.picture}
            />
          </div>
          <Text fz="xl" mt="sm" className={classes.description}>
            {translate("my-name")}{" "}
            <span className={classes.boldClass}>Pascoal Kahamba</span>{" "}
            {translate("my-name1")}{" "}
            <Link href={frontendAndbackend}>
              <a className={classes.links} target="_blank">
                {translate("my-skill")}
              </a>
            </Link>{" "}
            {translate("focus")}
            {""}{" "}
            <Link href={JavaScript}>
              <a className={classes.links} target="_blank">
                JavaScript
              </a>
            </Link>{" "}
            . Meu interesse pela programação começou em 2018, durante o Ensino
            Médio, quando adquiri conhecimentos em Lógica de Programação usando
            Visual G. Logo após, meu desejo por aprofundar meus conhecimentos me
            levou a explorar tecnologias como HTML, CSS e JavaScript,
            permitindo-me criar projetos mais atrativos e interativos. Desde
            então, tenho continuado aprimorando minhas habilidades e
            aperfeiçoando minha expertise no desenvolvimento Front-End.
            <div>
              My name is Pascoal Kahamba and I am a Front-End Web Development.
              Focusing on JavaScript ecosystem technologies. My interest in
              programming began in 2018, during High School, when I acquired
              knowledge in Programming Logic using Visual G. Soon after, my
              desire to deepen my knowledge led me to explore technologies such
              as HTML, CSS and JavaScript, allowing me to create projects more
              attractive and interactive. Since then, I have continued to
              improve my skills and improve my expertise in Front-End
              development.
            </div>
          </Text>
        </div>
      </Box>
    </>
  );
};

export default About;
