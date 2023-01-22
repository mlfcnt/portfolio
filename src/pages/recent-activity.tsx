import { GithubProject, useRecentProjects } from "@/api/github";
import { NextPageContext } from "next";
import React from "react";
type Props = {
  githubProjects: GithubProject[];
};

const RecentActivity = () => {
  const { data: githubProjects, isLoading, error } = useRecentProjects();

  return (
    <section>
      <h1 className="font-bold text-5xl mb-8" style={{ color: "#f69250" }}>
        Recent activity
      </h1>
      <div>
        {(githubProjects || []).map((project) => (
          <div key={project.id}>
            <p>{project.name}</p>
            <p>{project.description}</p>
            <p>
              Créé le{" "}
              {project.created_at &&
                new Date(project.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
