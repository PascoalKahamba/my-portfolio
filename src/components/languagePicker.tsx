import { useEffect, useState } from "react";
import {
  createStyles,
  UnstyledButton,
  Menu,
  Image,
  Group,
  rem,
} from "@mantine/core";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import { persistLocaleCookie } from "../../helpers/persistLocaleCookie";

const data = [
  { label: "Portuguese", image: "/portuguese.jpg" },
  { label: "English", image: "/english.jpg" },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(160),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    transition: "background-color 150ms ease",
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export default function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const { locale } = useRouter();
  const localeLanguage = locale === "en" ? "English" : "Portuguese";
  const localeImage = locale === "en" ? "/english.jpg" : "/portuguese.jpg";
  const [selected, setSelected] = useState({
    label: localeLanguage,
    image: localeImage,
  });

  const items = data.map((item) => (
    <Menu.Item
      icon={
        <Image src={item.image} width={20} height={12} alt="language-image" />
      }
      onClick={() => {
        setSelected(item);
        onChangeLanguage(item.label);
      }}
      key={item.label}
      sx={{
        textAlign: "center",
        pointerEvents: item.label === selected.label ? "none" : "painted",
        opacity: item.label === selected.label ? 0.5 : 1,
      }}
    >
      {item.label}
    </Menu.Item>
  ));

  async function onChangeLanguage(language: string) {
    const locale = language === "English" ? "en" : "pt";
    await setLanguage(locale);
    persistLocaleCookie(locale);
  }

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image
              src={selected.image}
              width={20}
              height={12}
              alt="language-image"
            />
            <span className={classes.label}>{selected.label}</span>
          </Group>

          <ChevronDownIcon size="1rem" className={classes.icon} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}
