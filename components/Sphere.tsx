import React, { useState } from "react";
import randomColor from "randomcolor";
import { ProjectDetails } from "./ProjectDetails";
import { FullProject } from "../Types/FullProject";
import { SphereDiv } from "./UI/SphereDiv";



export const Sphere = ({ project }: { project: FullProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const rdmColor = randomColor({
    luminosity: "light",
    format: "rgba",
    alpha: 0.9,
    seed: project.id,
  });
  
  return (
    <SphereDiv
      onClick={isOpen ? handleClose : handleOpen}
      isOpen={isOpen}
      backgroundColor={rdmColor}
    >
      <span hidden={isOpen}>{project.name}</span>
      <ProjectDetails project={project} hidden={!isOpen} />
      <span
        onClick={handleClose}
        hidden={!isOpen}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: 10,
          left: "95vw",
        }}
      >
        X Fermer
      </span>
    </SphereDiv>
  );
};
