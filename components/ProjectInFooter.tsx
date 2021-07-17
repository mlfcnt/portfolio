import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ProjectContext } from "../ProjectProvider";

export const ProjectInFooter = ({ project }: { project: any }) => {
  const { setActiveProject, toggleShowProjects } = useContext(ProjectContext);

  return (
    <motion.div
      className="projectInFooter"
      onClick={() => {
        setActiveProject(project), toggleShowProjects();
      }}
      initial={{ x: 1000 }}
      animate={{
        x: 0,
        y: 0,
        transition: {
          duration: 1.3,
          type: "spring",
        },
      }}
    >
      {project.title}
    </motion.div>
  );
};
