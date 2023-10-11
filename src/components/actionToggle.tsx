import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { SunIcon, MoonStarIcon } from "lucide-react";
import classes from "../styles/actionToggle.module.css";

export default function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        className={classes.actionToggle}
      >
        {colorScheme === "dark" ? (
          <SunIcon size="1.2rem" />
        ) : (
          <MoonStarIcon size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
