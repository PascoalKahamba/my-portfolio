import { useState, useEffect } from "react";
import { ArrowUpIcon } from "lucide-react";
import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  upIcon: {
    backgroundColor: theme.colors.blue[0],
    padding: theme.spacing.lg,
    borderRadius: theme.spacing.xs,
    alignSelf: "center",
    marginTop: rem(250),
    height: rem(10),
  },
}));

export default function ScrollControl() {
  const [scroll, SetScroll] = useState(0);
  const { classes } = useStyles();
  let heightBody = document.body.scrollHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      SetScroll(window.scrollY);
    });
  }, []);

  return (
    <div className={classes.upIcon}>
      {scroll > 50 && (
        <ArrowUpIcon onClick={() => window.scrollTo(heightBody, 0)} />
      )}
    </div>
  );
}
