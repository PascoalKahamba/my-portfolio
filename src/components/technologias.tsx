import React from "react";

interface TechnologiesProps {
  job: string;
  skills: {
    icon: string;
    name: string;
    description: string;
  }[];
}

export default function Technologias({ job, skills }: TechnologiesProps) {
  return <div>Technologias</div>;
}
