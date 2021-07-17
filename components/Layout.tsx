import { AnimatePresence, motion } from "framer-motion";
import { ReactChild, useContext } from "react";
import { ProjectContext } from "../ProjectProvider";
import { Projects } from "./Projects";
import { SortAndFilterProjects } from "./SortAndFilterProjects";

export const Layout = ({
  children,
}: {
  children: ReactChild | ReactChild[];
}) => {
  const { showProjects, activeProject, toggleShowProjects } =
    useContext(ProjectContext);

  return (
    <main>
      <div className="title">
        <h1>TMN.DEV</h1>
        <p className="subtitle">Web Dev React / NodeJS</p>
        <p className="subtitle">2 ans d'expérience</p>
        <p className="subtitle">Bel homme</p>
      </div>
      <section>{children || "main section"}</section>
      {activeProject && <section>{activeProject.title}</section>}

      {showProjects && !activeProject && <p>blablabla</p>}

      {showProjects && (
        <AnimatePresence>
          <motion.section
            className="projectsFooter"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1.2,
              },
            }}
          >
            <SortAndFilterProjects />
            <Projects />
          </motion.section>
        </AnimatePresence>
      )}
      {activeProject && !showProjects && (
        <button className="showProjectsBtn" onClick={toggleShowProjects}>
          Afficher les projets
        </button>
      )}
    </main>
  );
};
