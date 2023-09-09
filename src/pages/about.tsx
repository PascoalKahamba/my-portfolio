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
    justifyContent: "space-between",
    gap: 30,
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

  description: {},
}));

const About = () => {
  const { classes } = useStyles();
  const { t: translate } = useTranslation("about");
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{translate("page-title")} | Pascoal Kahamba</title>
      </Head>
      <Box component="section" className={classes.flexContenier}>
        <div className={classes.aboutMe}>
          <div data-aos="fade-right">
            <Title order={2} mt="md" className={classes.h1Child}>
              {translate("page-title")}
            </Title>
            <div>
              {" "}
              <Text fz="md" c="dimmed" mt="sm">
                {translate("hello-world")}
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
                Contactar
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
                Baixar CV{" "}
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
        </div>
      </Box>
    </>
  );
};

export default About;
