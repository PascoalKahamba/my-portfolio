import {
  Card,
  Text,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  CalendarDaysIcon,
  PhoneCallIcon,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import classes from "./../styles/elementsOfContacts.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import translations from "../../locales/en/useExternalLink";
import useTranslation from "next-translate/useTranslation";

const {
  github,
  linkedin,
  email,
  facebook,
  whatsapp,
  cellphone,
  calendly,
  discord,
  instagram,
} = translations;

function showPropsTarget(link: string) {
  if (link === email || link === cellphone) {
    return "_parent";
  }
  return "_blank";
}

export default function ElementsOfContacts() {
  const theme = useMantineTheme();
  const { t: translate } = useTranslation("common");

  const mockdata = [
    { link: email, title: "Email", icon: AiOutlineMail, color: "indigo" },
    { link: github, title: "Github", icon: GithubIcon, color: "violet" },
    { link: linkedin, title: " LinkEdin", icon: LinkedinIcon, color: "blue" },
    {
      link: instagram,
      title: "Instagram",
      icon: InstagramIcon,
      color: "pink",
    },
    { link: facebook, title: "Facebook", icon: FacebookIcon, color: "blue" },
    { link: discord, title: "Discord", icon: BsDiscord, color: "cyan" },
    { link: whatsapp, title: "WhatSapp", icon: FaWhatsapp, color: "green" },
    {
      link: cellphone,
      title: translate("cellphone"),
      icon: PhoneCallIcon,
      color: "red",
    },
    {
      link: calendly,
      title: translate("appointment"),
      icon: CalendarDaysIcon,
      color: "orange",
    },
  ];

  const items = mockdata.map((item) => (
    <Link href={item.link} key={item.title}>
      <a target={showPropsTarget(item.link)} className={classes.link}>
        <UnstyledButton className={classes.item}>
          <item.icon color={theme.colors[item.color][6]} size="2rem" />
          <Text size="xs" mt={7}>
            {item.title}
          </Text>
        </UnstyledButton>
      </a>
    </Link>
  ));

  return (
    <Card
      withBorder
      radius="md"
      className={classes.card}
      data-aos="fade-up"
      data-aos-duration="1400"
    >
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
