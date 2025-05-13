
import { type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (id: number) => void;
}

const ProjectsGrid = ({ projects, onProjectClick }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id}
          project={project}
          onClick={onProjectClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
