import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
} from "@mantine/core";
import classes from "../styles/userProfile.module.css";

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  skill: string;
}

export default function UserProfile({
  image,
  name,
  skill,
  ...others
}: UserButtonProps) {
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
