import { Text, Container, Group, rem, Stack } from "@mantine/core";
import { CalendarDaysIcon, PhoneCallIcon } from "lucide-react";
import UserButton from "./userProfile";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Alldata from "../../contents/alldata";
import { scrollToThePlace } from "./scrollControl";
import { useAtom } from "jotai";
import { countYearAtom, nameDeveloperAtom } from "../atoms";
import translations from "../../locales/en/useExternalLink";
import classes from "../styles/footer.module.css";

const SCROLL_TO_A_LOCAL_PAGE = 400;
const TIMELINE_2020 = 2;
const TIMELINE_2023 = 5;
const TIMELINE_2021 = 3;
const TIMELINE_2019 = 1;
const TIMELINE_2022 = 4;

const { whatsapp, cellphone, calendly } = translations;

const socialMedia = [
  {
    Icon: FaWhatsapp,
    link: whatsapp,
  },
  {
    Icon: PhoneCallIcon,
    link: cellphone,
  },
  {
    Icon: CalendarDaysIcon,
    link: calendly,
  },
];

export default function FooterLinks() {
  const { t: translate } = useTranslation("common");
  const [_, setCount] = useAtom(countYearAtom);
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { footerData } = Alldata();
  const currentYear = new Date().getFullYear();

  function choseThisTimeline(tecnologiesOrYear: string) {
    if (tecnologiesOrYear === "JavaScript" || tecnologiesOrYear === "2019") {
      setCount(TIMELINE_2019);
      return;
    }
    if (tecnologiesOrYear === "TypeScript" || tecnologiesOrYear === "2022") {
      setCount(TIMELINE_2022);
      return;
    }
    if (tecnologiesOrYear === "Next.js" || tecnologiesOrYear === "2023") {
      setCount(TIMELINE_2023);
      return;
    }
    if (tecnologiesOrYear === "React.js" || tecnologiesOrYear === "2021") {
      setCount(TIMELINE_2021);
      return;
    }

    setCount(TIMELINE_2020);
  }

  function goToEspecialTimeline(timeline: string, title: string) {
    if (
      title === translate("tecnologies") ||
      title !== translate("navigation")
    ) {
      choseThisTimeline(timeline);
      setTimeout(() => {
        scrollToThePlace(SCROLL_TO_A_LOCAL_PAGE);
      }, 2000);
    }
  }

  const groups = footerData.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} href={link.link}>
        <Text<"a">
          className={classes.link}
          component="a"
          href={link.link}
          onClick={() => goToEspecialTimeline(link.label, group.title)}
        >
          {link.label}
        </Text>
      </Link>
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
            name={nameDeveloper}
            image="/my-photo.jpg"
            skill={translate("my-skill")}
          />
          <Text size="xs" c="dimmed" className={classes.description}>
            {translate("description")}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {currentYear} - {translate("2023")}
        </Text>

        <Group className={classes.social} justify="flex-end" wrap="nowrap">
          <Stack justify="center">
            <div className={classes.socialMedia}>
              {socialMedia.map(({ Icon, link }) => (
                <Link href={link} key={link}>
                  <a
                    target={link === cellphone ? "_parent" : "_blank"}
                    className={classes.eachSocial}
                  >
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
