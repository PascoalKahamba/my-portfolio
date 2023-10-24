import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";
<<<<<<< HEAD
import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  upIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blue[5],
    cursor: "pointer",
    padding: theme.spacing.xs,
    border: "none",
    outline: "none",
    borderRadius: theme.spacing.sm,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    position: "fixed",
    left: rem(4),
    bottom: rem(6),
    Zindex: 1000,
  },
}));
=======
import classes from "../styles/scrollControl.module.css";
>>>>>>> 1f8b706ae6cf18456ff092049ff487a1ef195cd3

const SCROLL_TO_TOP_PAGE = 0;

export function scrollToThePlace(placeNumber: number) {
  let heightBody = document.body.scrollHeight;
  window.scrollTo(heightBody, placeNumber);
}

export default function ScrollControl() {
  const [scroll, SetScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => SetScroll(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => SetScroll(window.scrollY));
    };
  }, []);

  return (
    <>
      {scroll > 50 && (
        <div
          className={classes.upIcon}
          data-aos="fade-up"
          data-aos-duration="1000"
          onClick={() => scrollToThePlace(SCROLL_TO_TOP_PAGE)}
        >
          <ArrowUpIcon size="1.5rem" />
        </div>
      )}
    </>
  );
}
