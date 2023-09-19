import { createStyles, Box, Image, Tooltip, rem } from "@mantine/core";
import { AlertCircleIcon } from "lucide-react";

interface TechnologiesProps {
  job: string;
  skills: {
    icon: string;
    name: string;
    aosDuration: number;
    description: string;
  }[];
}

const useStyles = createStyles((theme) => ({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(17),
  },

  icons: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: rem(10),
  },

  icon: {
    display: "flex",
    flex: "0 1 8rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(5),
    padding: "1rem 5px",
    borderRadius: theme.spacing.xs,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    "&:hover": {
      cursor: "pointer",
      boxShadow: " 0 6px 14px 1px rgb(0 0 0 / 20%)",
    },
  },

  flexLenged: {
    width: rem(230),
    whiteSpace: "normal",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: rem(8),
  },

  line: {
    height: rem(3),
    // flex: " 1 1 40rem",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
}));

export default function Technologias({ job, skills }: TechnologiesProps) {
  const { classes } = useStyles();

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
      <div
        className={classes.flexTitle}
        data-aos="fade-left"
        data-aos-duration="1400"
      >
        <div
          className={classes.line}
          style={
            job === "FRONT-END" ? { width: rem(235) } : { width: rem(165) }
          }
        ></div>
        <h1>{job}</h1>
        <div
          className={classes.line}
          style={
            job === "FRONT-END" ? { width: rem(235) } : { width: rem(165) }
          }
        ></div>
      </div>
      <div className={classes.icons}>{mySkills}</div>
    </Box>
  );
}
