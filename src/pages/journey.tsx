import { useRouter } from "next/router";
import React from "react";

const Journey = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return <div>Journey</div>;
};

export default Journey;
