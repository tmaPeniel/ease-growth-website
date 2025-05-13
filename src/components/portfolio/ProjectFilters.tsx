
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({ categories, activeFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center mb-16 gap-2 animate-on-scroll">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeFilter === category 
              ? "bg-black text-white" 
              : "bg-gray-100 text-gray-800 hover:bg-gold/10"
          )}
        >
          {category === "all" ? "Tous les projets" : category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
