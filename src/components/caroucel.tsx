import { rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function CaroucelElement() {
  return (
    <Carousel
      height={180}
      nextControlIcon={
        <ArrowRightIcon style={{ width: rem(16), height: rem(16) }} />
      }
      previousControlIcon={
        <ArrowLeftIcon style={{ width: rem(16), height: rem(16) }} />
      }
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
