import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProjectContext } from "../ProjectProvider";

export const ProjectInFooter = ({ x, project }: { x: any; project: any }) => {
  const { setActiveProject, toggleShowProjects } = useContext(ProjectContext);
  const projectVariants = {
    initial: {
      opacity: 0,
      x,
    },
    hover: {
      scale: 1.2,
    },
    tapped: {
      scale: 10,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="projectInFooter"
      onClick={() => {
        setActiveProject(project), toggleShowProjects();
      }}
      variants={projectVariants}
      animate={{
        x,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      initial={"initial"}
      whileHover={"hover"}
      whileTap={"tapped"}
    >
      <span>{project.title}</span>
    </motion.div>
  );
};
