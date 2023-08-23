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

const data = [
  { label: "English", image: "/english.jpg" },
  { label: "Português", image: "/portugue.jpg" },
];

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: rem(150),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    border: `${rem(1)} none ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor:
      theme.colorScheme === "dark"
        ? "dark"
        : opened
        ? theme.colors.gray[0]
        : theme.white,
  },

  label: {
    fontWeight: "bold",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[4],
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
  const items = data.map((item) => (
    <Menu.Item
      icon={
        <Image src={item.image} width={18} height={18} alt="language-image" />
      }
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

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
