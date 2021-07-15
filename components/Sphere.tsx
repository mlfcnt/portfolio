import React, { useMemo, useState } from "react";
import styles from "./Sphere.module.css";
import randomColor from "randomcolor";
import { ProjectDetails } from "./ProjectDetails";
import { FullProject } from "../Types/FullProject";

export const Sphere = ({ project }: { project: FullProject }) => {
  const rdmColor = randomColor({
    luminosity: "light",
    format: "rgba",
    alpha: 0.9,
    seed: project.id,
  });

  const DEFAULT_STYLE = {
    backgroundColor: rdmColor,
    border: "2px solid black",
    width: "200px",
    height: "200px",
    cursor: "pointer",
    margin: "30px",
  };
  const [additionnalStyle, setAdditionnalStyle] = useState<{}>(DEFAULT_STYLE);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setAdditionnalStyle({
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
    });
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    setAdditionnalStyle({ ...additionnalStyle, DEFAULT_STYLE });
    console.log("close");
  };
  return (
    <div
      className={styles.sphere}
      style={additionnalStyle}
      onClick={handleOpen}
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
        className={styles.close}
      >
        X Fermer
      </span>
    </div>
  );
};
