import z from "zod";
import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";

const githubProjectSchema = z.object({
  owner_url: z.string(),
  url: z.string(),
  html_url: z.string(),
  columns_url: z.string(),
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  body: z.string(),
  number: z.number(),
  state: z.string(),
  creator: z.object({
    login: z.string(),
    id: z.number(),
    node_id: z.string(),
    avatar_url: z.string(),
    gravatar_id: z.string(),
    url: z.string(),
    html_url: z.string(),
    followers_url: z.string(),
    following_url: z.string(),
    gists_url: z.string(),
    starred_url: z.string(),
    subscriptions_url: z.string(),
    organizations_url: z.string(),
    repos_url: z.string(),
    events_url: z.string(),
    received_events_url: z.string(),
    type: z.string(),
    site_admin: z.boolean(),
  }),
  created_at: z.string(),
  updated_at: z.string(),
});

export type GithubProject = z.infer<typeof githubProjectSchema>;

export const useRecentProjects = () =>
  useQuery(["github_recent_projects"], async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    const res = await octokit.rest.repos.listForUser({
      username: "mlfcnt",
      sort: "created",
      page: 1,
      per_page: 10,
    });
    const projects = res.data;
    console.log({ projects });
    return projects;
  });
