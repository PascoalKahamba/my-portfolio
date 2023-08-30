import { useRouter } from "next/router";
import React from "react";

const Projects = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return <div>Projects</div>;
};

export default Projects;
