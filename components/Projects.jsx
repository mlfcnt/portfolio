import React, { useContext } from "react";
import { ProjectContext } from "../ProjectProvider";
import { ProjectInFooter } from "./ProjectInFooter";

export const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <section className="projects">
      {projects.map((project) => (
        <ProjectInFooter key={project.id} project={project} />
      ))}
    </section>
  );
};
