
import { Code, Award, LightbulbIcon, ExternalLink, Camera } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/10 hover:bg-black/20 rounded-full z-10 transition-colors"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-80 object-cover rounded-t-xl"
        />
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
              {project.category}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
              {project.year}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-700 mb-4">Client : {project.client}</p>
          <p className="text-gray-600 mb-6">
            {project.description}
          </p>
          
          {/* Technologies Section */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Code className="w-5 h-5 mr-2 text-gold" />
              <h3 className="text-lg font-bold">Technologies utilisées</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Challenge Section */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Award className="w-5 h-5 mr-2 text-gold" />
              <h3 className="text-lg font-bold">Le défi</h3>
            </div>
            <p className="text-gray-600">
              {project.challenge}
            </p>
          </div>
          
          {/* Solution Section */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <LightbulbIcon className="w-5 h-5 mr-2 text-gold" />
              <h3 className="text-lg font-bold">Notre solution</h3>
            </div>
            <p className="text-gray-600">
              {project.solution}
            </p>
          </div>

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Camera className="w-5 h-5 mr-2 text-gold" />
                <h3 className="text-lg font-bold">Aperçu du projet</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot} 
                    alt={`${project.title} - Aperçu ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg border border-gray-200"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Project Link */}
          {project.link && project.link !== "#" && (
            <div className="pt-4 border-t border-gray-200">
              <Button asChild className="w-full">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le projet en ligne
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
