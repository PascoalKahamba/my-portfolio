import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";
import classes from "../styles/scrollControl.module.css";

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
