
import { useState } from "react";
import Layout from "../components/Layout";
import { projects } from "@/data/projects";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectFilters from "@/components/portfolio/ProjectFilters";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import ProjectModal from "@/components/portfolio/ProjectModal";

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProject = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <Layout>
      <PortfolioHero />

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ProjectFilters 
            categories={categories}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
          
          <ProjectsGrid 
            projects={filteredProjects}
            onProjectClick={openProject}
          />
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && project && (
        <ProjectModal project={project} onClose={closeProject} />
      )}
    </Layout>
  );
};

export default PortfolioPage;
