import { Title, createStyles, rem } from "@mantine/core";
import React from "react";

interface MainTitleProps {
  title: string;
}

const useStyles = createStyles((theme) => ({
  title: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.gray[5],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function MainTitle({ title }: MainTitleProps) {
  const { classes } = useStyles();
  return (
    <Title order={2} mt="md" className={classes.title}>
      {title}
    </Title>
  );
}
