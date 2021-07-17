import { useContext, useEffect } from "react";
import { getSortedProjectsData } from "../lib/projects";
import { ProjectContext } from "../ProjectProvider";

export default function Home({ allProjectsData }: { allProjectsData: any }) {
  const { setProjects, toggleShowProjects } = useContext(ProjectContext);
  useEffect(() => {
    setProjects(allProjectsData);
  }, [allProjectsData, setProjects]);

  return null;
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
