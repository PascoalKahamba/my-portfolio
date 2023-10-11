import { rem } from "@mantine/core";
import React from "react";
import classes from "../styles/globalTitle.module.css";

interface GlobalTitleProps {
  title: string;
  width: number;
}

export default function GlobalTitle({ title, width }: GlobalTitleProps) {
  return (
    <div
      className={classes.flexTitle}
      data-aos="fade-left"
      data-aos-duration="1400"
    >
      <div className={classes.line} style={{ width: rem(width) }}></div>
      <h1>{title}</h1>
      <div className={classes.line} style={{ width: rem(width) }}></div>
    </div>
  );
}
