
import { useState } from "react";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  return (
    <div 
      key={project.id}
      className="group relative overflow-hidden rounded-xl cursor-pointer animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onClick(project.id)}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"
      ></div>
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300 group-hover:translate-y-0">
        <span className="text-xs font-medium text-white/80 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mt-3 group-hover:text-gold transition-colors">
          {project.title}
        </h3>
        <div className="mt-2 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
          <span className="inline-flex items-center text-white/90 text-sm">
            <span>Voir le détail</span>
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
