import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
} from "@mantine/core";
import useMedia from "../hooks/useMedia";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    cursor: "context-menu",
    textAlign: "right",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  skill: string;
  kindOfUser: "header" | "footer";
}

export default function UserProfile({
  image,
  name,
  skill,
  kindOfUser,
}: UserButtonProps) {
  const { classes } = useStyles();
  const offMobile = useMedia("(max-width:56rem)");
  const onMobile = useMedia("(max-width:48rem)");

  return (
    <UnstyledButton
      className={classes.user}
      sx={
        kindOfUser === "header"
          ? { display: offMobile === onMobile ? "flex" : "none" }
          : { display: "flex" }
      }
    >
      <Group className={classes.profile}>
        <Avatar src={image} radius="xl" size={40} />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {skill}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
