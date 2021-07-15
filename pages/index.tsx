import { Project } from ".prisma/client";
import { GetStaticProps } from "next";
import { Sphere } from "../components/Sphere";
import prisma from "../lib/prisma";

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
import styles from "../styles/Home.module.css";
import { FullProject } from "../Types/FullProject";

export default function Home({ projects }: { projects: FullProject[] }) {
  if (!projects.length) return <p>Pas de projets...</p>;
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Sphere key={project.id} project={project} />
      ))}
    </div>
  );
}
