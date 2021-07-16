import React from "react";
import { FullProject } from "../Types/FullProject";
import styles from "./Sphere.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export const Sphere = ({ project }: { project: FullProject }) => {
  // const projectVariants = {
  //   initial: { scale: 0.96, y: 30, opacity: 0 },
  //   enter: {
  //     scale: 1,
  //     y: 0,
  //     opacity: 1,
  //     transition: { duration: 0.5 },
  //   },
  //   hover: {
  //     scale: 1.1,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  // };

  const variants = {
    initial: { scale: 0.5, x: 100000, y: 0 },
    enter: {
      scale: 1.0,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
    hover: {
      scale: 1.1,
    },
  };
  return (
    <Link href={`/project/${project.id}`} passHref>
      <motion.div
        variants={variants}
        className={styles.sphere}
        key={project.id}
      >
        {project.name}
      </motion.div>
    </Link>
  );
};
