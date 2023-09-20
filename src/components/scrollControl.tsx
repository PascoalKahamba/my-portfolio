import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";
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
    color: theme.white,
    position: "fixed",
    left: rem(4),
    bottom: rem(6),
    Zindex: 1000,
  },
}));

export default function ScrollControl() {
  const [scroll, SetScroll] = useState(0);
  const { classes } = useStyles();
  let heightBody = document.body.scrollHeight;

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
          data-aos-duration="1200"
        >
          <ArrowUpIcon
            onClick={() => window.scrollTo(heightBody, 0)}
            size="1.5rem"
          />
        </div>
      )}
    </>
  );
}
