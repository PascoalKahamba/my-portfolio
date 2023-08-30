import { useRouter } from "next/router";
import React from "react";

const About = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return <div>About</div>;
};

export default About;
