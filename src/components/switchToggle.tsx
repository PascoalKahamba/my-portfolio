import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { SunMedium, MoonIcon } from "lucide-react";
import { stateAtom } from "../atoms";
import { useAtom } from "jotai/react";

export function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [counter] = useAtom(stateAtom);

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        className="cursor-pointer"
        size="lg"
        onLabel={<SunMedium color={theme.white} size="1.25rem" />}
        offLabel={<MoonIcon color={theme.colors.gray[6]} size="1.25rem" />}
      />
    </Group>
  );
}
