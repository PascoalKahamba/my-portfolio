import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { SunIcon, MoonStarIcon } from "lucide-react";

export default function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.black[0]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
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
