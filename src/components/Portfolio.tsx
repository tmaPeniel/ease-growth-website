
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectFilters from "@/components/portfolio/ProjectFilters";
import FeaturedProjectsCarousel from "@/components/portfolio/FeaturedProjectsCarousel";

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3 animate-fade-down opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            NOTRE PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-down opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Projets réalisés avec passion
          </h2>
          <p className="text-gray-600 animate-fade-down opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Découvrez quelques-unes de nos réalisations récentes qui ont permis à nos clients d'atteindre leurs objectifs.
          </p>
        </div>

        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <ProjectFilters
            categories={categories}
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
          <FeaturedProjectsCarousel projects={filteredProjects} />
        </div>

        <div className="mt-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <Link 
            to="/portfolio" 
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
          >
            Voir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
