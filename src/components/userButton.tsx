import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  px,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  user: {
    display: "block",
    cursor: "context-menu",
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
}

export default function UserButton({
  image,
  name,
  skill,
  ...others
}: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
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
