import { Tech } from "@prisma/client";
import { Category, Image, Project } from "@prisma/client";
export type FullProject = Project & {
  categories: Category[];
  images: Image[];
  stack: Tech[];
};
