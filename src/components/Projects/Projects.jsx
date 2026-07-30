import { useMemo, useState } from "react";
import { projects, projectCategories } from "../../data/projects";
import ProjectsHeader from "./ProjectsHeader";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";

export default function Projects() {
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
      className="relative bg-slate-50/60 dark:bg-slate-950/60 py-16 sm:py-20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <ProjectsHeader />

        {/* Filters */}
        <ProjectFilter
          categories={projectCategories}
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