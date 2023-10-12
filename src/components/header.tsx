import { Group, Box, useMantineTheme } from "@mantine/core";
import LanguagePicker from "./languagePicker";
import ActionToggle from "./actionToggle";
import UserProfile from "./userProfile";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Alldata from "../../contents/alldata";
import { nameDeveloperAtom } from "../atoms";
import classes from "../styles/header.module.css";
import { useAtom } from "jotai";

interface LinkProps {
  label: string;
  link: string;
}

export default function HeaderMegaMenu() {
  const { pathname } = useRouter();
  const [nameDeveloper] = useAtom(nameDeveloperAtom);
  const { t: translate } = useTranslation("common");
  const { mainLinks } = Alldata();

  const mainItems = mainLinks.map((item) => (
    <Link key={item.label} href={item.link}>
      <a href={item.link} data-active={item.link === pathname || undefined}>
        {item.label}
      </a>{" "}
    </Link>
  ));

  return (
    <Box pb={90}>
      <header className={classes.headerElement}>
        <Group
          position="apart"
          sx={{ height: "100%" }}
          className={classes.headerChild}
        >
          <UserProfile
            name={nameDeveloper}
            image="/my-photo.jpg"
            skill={translate("my-skill")}
          />
          <Group className={classes.mainLinks}>{mainItems}</Group>
          <Group className={classes.hiddenMobile}>
            <LanguagePicker />
            <ActionToggle />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
