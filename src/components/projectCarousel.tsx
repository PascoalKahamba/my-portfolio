import {
  Image,
  Card,
  Text,
  Group,
  Button,
  rem,
  createStyles,
  px,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { StarIcon } from "lucide-react";
import classs from "../styles/projectCarousel.module.css";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { TbBrandVercel } from "react-icons/tb";

const images = [
  "/projectPictures/financialProject.PNG",
  "/projectPictures/financialProject02.PNG",
  "/projectPictures/financialProject03.PNG",
  "/projectPictures/financialProject04.PNG",
  "/projectPictures/financialProject05.PNG",
];

const useStyles = createStyles((theme) => ({
  technologies: {
    backgroundColor: theme.colors.blue[5],
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderRadius: theme.spacing.xs,
    padding: "5px 0.5rem",
  },
  links: {
    backgroundColor: theme.colors.blue[5],
    padding: rem(5),
    borderRadius: theme.spacing.xs,
    textDecoration: "none",
    display: "inline-block",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    display: "flex",
    gap: rem(10),
    alignItems: "center",
  },

  carouselIndicator: {
    width: "rem(4px)",
    height: "rem(4px)",
    transition: " width 250ms ease",
  },

  card: {
    width: rem(600),
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function ProjectCarousel() {
  const { classes } = useStyles();
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} alt="project picture" />
    </Carousel.Slide>
  ));

  return (
    <Card
      radius="md"
      withBorder
      padding="xl"
      className={classes.card}
      data-aos="fade-right"
      data-aos-duration="1400"
    >
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classs.carousel,
            controls: classs.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group mt="lg">
        <Text fw={500} fz="lg">
          Gestor Financeiro
        </Text>

        <Group>
          <Text fz="xs" className={classes.technologies} fw={500}>
            TypeScript
          </Text>
          <Text fz="xs" className={classes.technologies} fw={500}>
            React
          </Text>
          <Text fz="xs" className={classes.technologies} fw={500}>
            Material-UI
          </Text>
        </Group>
      </Group>

      <Group mt="md" className={classes.icons}>
        <div className={classes.icon}>
          <Link href="">
            <a className={classes.links} target="_blank">
              <GithubIcon size="1.5rem" />
            </a>
          </Link>
          <Link href="">
            <a className={classes.links} target="_blank">
              <TbBrandVercel size="1.5rem" />
            </a>
          </Link>
        </div>
        <Text fz="xs" className={classes.technologies} fw={500}>
          Concluido
        </Text>
      </Group>
    </Card>
  );
}
