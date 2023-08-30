import { useRouter } from "next/router";
import React from "react";

const Contact = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  return <div>Contact</div>;
};

export default Contact;
