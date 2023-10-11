import { Title } from "@mantine/core";
import React from "react";
import classes from "../styles/mainTitle.module.css";

interface MainTitleProps {
  title: string;
  dataAos?: string;
  dataAosDuration?: number;
}

export default function MainTitle({
  title,
  dataAos,
  dataAosDuration,
}: MainTitleProps) {
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
