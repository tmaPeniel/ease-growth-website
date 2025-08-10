
import { Link } from "react-router-dom";
import { type Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
  active: boolean;
  index: number;
}

const FeaturedProjectCard = ({ project, active, index }: FeaturedProjectCardProps) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500 ${
        active ? "scale-100" : "scale-95 opacity-90"
      } animate-on-scroll`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90 z-10" />

      {/* Image */}
      <img
        src={project.image}
        alt={`Projet ${project.title} - ${project.category}`}
        loading="lazy"
        className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <span className="text-xs font-medium text-white/90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mt-3 group-hover:text-gold transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-white/80 max-h-12 overflow-hidden">
          {project.description}
        </p>
        <div className="mt-4">
          <Link
            to={project.link}
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/40 text-white/90 hover:bg-white/10 transition-colors"
          >
            Voir le projet
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
