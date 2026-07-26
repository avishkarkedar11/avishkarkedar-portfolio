import { useMemo, useState } from "react";

import { projects } from "../../data/projects";

import ProjectsHeader from "./ProjectsHeader";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const categories = ["All", "AI/ML", "Web", "Apps"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="bg-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <ProjectsHeader />

        {/* Filters */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={openProject}
        />

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProject}
      />
    </section>
  );
}