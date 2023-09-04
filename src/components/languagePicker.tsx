import { useState } from "react";
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

const data = [
  { label: "English", image: "/english.jpg" },
  { label: "Portuguese", image: "/portuguese.jpg" },
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
  const [selected, setSelected] = useState(data[0]);
  const { pathname, push } = useRouter();
  const items = data.map((item) => (
    <Menu.Item
      icon={
        <Image src={item.image} width={16} height={16} alt="language-image" />
      }
      onClick={() => {
        setSelected(item);
        onChangeLanguage(item.label);
      }}
      key={item.label}
      sx={{ textAlign: "center" }}
    >
      {item.label}
    </Menu.Item>
  ));

  function onChangeLanguage(language: string) {
    push(pathname, undefined, {
      locale: language === "English" ? "en" : "pt",
    });
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
              width={16}
              height={16}
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
