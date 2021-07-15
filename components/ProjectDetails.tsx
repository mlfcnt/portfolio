import { Project } from "@prisma/client";
import React from "react";
import { FullProject } from "../Types/FullProject";

export const ProjectDetails = ({
  project,
  hidden,
}: {
  project: FullProject;
  hidden: boolean;
}) => {
  const { name, description, categories } = project;

  const displayTitle = () => {
    if (!categories.length) return name;
    const joinedTypes = categories.map(({ name }) => name).join(",");
    return `${name} (${joinedTypes})`;
  };
  return (
    <div hidden={hidden}>
      <h1>{displayTitle()}</h1>
      <p>{description}</p>
      {/* <p style={{ position: "absolute", bottom: 20, textAlign: "center" }}>
        Autre projets 🠗
      </p> */}
    </div>
  );
};
