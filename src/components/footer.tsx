import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Stack,
} from "@mantine/core";
import { CalendarDaysIcon, PhoneCallIcon } from "lucide-react";
import UserButton from "./userButton";
import { UseTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { activeAtom } from "../atoms";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.black[0] : theme.white,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),
    fontWeight: 500,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(12),
  },

  eachSocial: {
    display: "inline-block",
    padding: rem(1),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.blue[5]
          : theme.colors.blue[3],
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const socialMedia = [
  {
    Icon: FaWhatsapp,
    link: "https://api.whatsapp.com/send?phone=941900324",
  },
  {
    Icon: PhoneCallIcon,
    link: "tel://941900324",
  },
  {
    Icon: CalendarDaysIcon,
    link: "https://calendly.com/pascoalkahamba",
  },
];

export default function FooterLinks({ data }: FooterLinksProps) {
  const [, setActive] = useAtom(activeAtom);
  const { classes } = useStyles();
  const router = useRouter();
  const { t: translate } = useTranslation("footer");

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
          router.push(link.link);
        }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <UserButton
            name="Pascoal Kahamba"
            image="/my-photo.jpg"
            skill="Desenvolvedor Front-End"
          />
          <Text size="xs" color="dimmed" className={classes.description}>
            {translate("description")}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 - {translate("2023")}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Stack justify="center" spacing={0}>
            <div className={classes.socialMedia}>
              {socialMedia.map(({ Icon, link }) => (
                <Link href={link} key={link}>
                  <a target="_blank" className={classes.eachSocial}>
                    <Icon size="1.05rem" />
                  </a>
                </Link>
              ))}
            </div>
          </Stack>
        </Group>
      </Container>
    </footer>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["footer"])),
    },
  };
};
