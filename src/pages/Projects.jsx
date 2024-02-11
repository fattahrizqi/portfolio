import { React } from "react";
import { Cursor, HeroProjects, ProjectLists } from "../components";

function Projects() {
  return (
    <div className="relative">
      {/* cursor */}
      <Cursor />
      {/* main */}
      <HeroProjects />
      <ProjectLists />
    </div>
  );
}

export default Projects;
