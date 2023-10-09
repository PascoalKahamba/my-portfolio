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

const mockdata = [
  { link: "pascoal", title: "Email", icon: AiOutlineMail, color: "violet" },
  { link: "pascoal", title: "Github", icon: GithubIcon, color: "indigo" },
  { link: "pascoal", title: " LinkEnd", icon: LinkedinIcon, color: "blue" },
  { link: "pascoal", title: "Instagram", icon: InstagramIcon, color: "green" },
  { link: "pascoal", title: "Facebook", icon: FacebookIcon, color: "teal" },
  { link: "pascoal", title: "Discord", icon: BsDiscord, color: "cyan" },
  { link: "pascoal", title: "WhatSapp", icon: FaWhatsapp, color: "pink" },
  { link: "pascoal", title: "CellPhone", icon: PhoneCallIcon, color: "red" },
  {
    link: "pascoal",
    title: "Calendly",
    icon: CalendarDaysIcon,
    color: "orange",
  },
];

export default function ElementsOfContacts() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <Link href={item.link} key={item.title}>
      <a target="_blank" className={classes.link}>
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
    <Card withBorder radius="md" className={classes.card}>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
