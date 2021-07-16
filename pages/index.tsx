import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Sphere } from "../components/Sphere";
import DBClient from "../db/prisma";
import styles from "../styles/Home.module.css";
import { FullProject } from "../Types/FullProject";

const prisma = DBClient.getInstance().prisma;

export const getStaticProps: GetStaticProps = async () => {
  const projects: FullProject[] = await prisma.project.findMany({
    where: {
      visible: true,
    },
    include: {
      categories: true,
      images: true,
      stack: true,
    },
  });
  return {
    props: { projects },
  };
};

export default function Home({ projects }: { projects: FullProject[] }) {
  if (!projects.length) return <p>Pas de projets...</p>;
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className={styles.container}>
        {projects.map((project) => (
          <Sphere key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}
