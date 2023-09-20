import { Title, createStyles, rem } from "@mantine/core";
import React from "react";

interface MainTitleProps {
  title: string;
  dataAos?: string;
  dataAosDuration?: number;
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

export default function MainTitle({
  title,
  dataAos,
  dataAosDuration,
}: MainTitleProps) {
  const { classes } = useStyles();
  return (
    <Title
      order={2}
      mt="md"
      className={classes.title}
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
    >
      {title}
    </Title>
  );
}
