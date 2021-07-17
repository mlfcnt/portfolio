import React from "react";
import { FilterProjects } from "./FilterProjects";
import { SortProjects } from "./SortProjects";

export const SortAndFilterProjects = () => {
  return (
    <div className="footerBtns">
      <SortProjects />
      <FilterProjects />
    </div>
  );
};
