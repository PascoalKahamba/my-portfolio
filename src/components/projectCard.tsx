import { Image, Card, Text, Group, Button, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { StarsIcon } from "lucide-react";
import classes from "../styles/projectCard.module.css";

const images = [
  "/my-photo.jpg",
  "/my-photo.jpg",
  "/my-photo.jpg",
  "/my-photo.jpg",
];

export default function ProjectCard() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} alt="picture-project" />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group mt="lg">
        <Text fw={500} fz="lg">
          Forde, Norway
        </Text>

        <Group>
          <StarsIcon style={{ width: rem(16), height: rem(16) }} />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
        close to nature in ultimate comfort. Enjoy the view of the epic mountain
        range of Blegja and the Førdefjord.
      </Text>

      <Group mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            397$
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
  );
}
