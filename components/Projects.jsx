import React, { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ProjectContext } from "../ProjectProvider";
import { ProjectInFooter } from "./ProjectInFooter";
import { useResponsiveHelpers } from "../lib/ResponsiveHelpers";
import { useKeyPressEvent } from "react-use";

export const Projects = () => {
  const { isDesktopOrLaptop } = useResponsiveHelpers();
  const [x, setX] = useState(isDesktopOrLaptop ? 0 : 780);
  const { projects } = useContext(ProjectContext);
  const controls = useAnimation();
  const STEP = 200;

  const scrollRight = () => {
    setX(x - STEP);
  };
  const scrollLeft = () => {
    setX(x + STEP);
  };

  useEffect(() => {
    controls.start((i) => ({
      opacity: 0,
      x: 100,
      transition: { delay: i * 0.3 },
    }));
  }, [controls]);

  useKeyPressEvent("ArrowRight", scrollRight);
  useKeyPressEvent("ArrowLeft", scrollLeft);

  return (
    <motion.div style={{ display: "flex", flexDirection: "column" }}>
      <section className="projects">
        {projects.map((project) => (
          <ProjectInFooter key={project.id} project={project} x={x} />
        ))}
      </section>
      <div className="arrowContainer">
        <button onClick={scrollLeft} className="arrow" animate={controls}>
          &larr;
        </button>
        <button className="arrow" onClick={scrollRight} animate={controls}>
          &rarr;
        </button>
      </div>
    </motion.div>
  );
};
