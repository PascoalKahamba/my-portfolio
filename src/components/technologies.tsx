import { Box, Image, Tooltip, useMantineTheme } from "@mantine/core";
import { AlertCircleIcon } from "lucide-react";
import GlobalTitle from "./globalTitle";
import classes from "../styles/technologies.module.css";

interface TechnologiesProps {
  job: string;
  width: number;
  skills: {
    icon: string;
    name: string;
    aosDuration: number;
    description: string;
  }[];
}

export default function Technologias({
  job,
  skills,
  width,
}: TechnologiesProps) {
  const theme = useMantineTheme();

  const mySkills = skills.map(({ aosDuration, name, description, icon }) => (
    <Tooltip
      label={
        <div className={classes.flexLenged}>
          <AlertCircleIcon style={{ flex: "1 0 1.2rem" }} />
          <span>{description}</span>
        </div>
      }
      position="bottom"
      withArrow
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2],
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[7],
      })}
      transitionProps={{ duration: 0 }}
      key={name}
    >
      <div
        data-aos="flip-left"
        data-aos-duration={aosDuration}
        className={classes.icon}
      >
        <Image src={icon} alt={name} width={45} height={40} />
        <span>{name}</span>
      </div>
    </Tooltip>
  ));

  return (
    <Box component="section" style={{ width: "100%" }}>
      <GlobalTitle title={job} width={width} />
      <div className={classes.icons}>{mySkills}</div>
    </Box>
  );
}
