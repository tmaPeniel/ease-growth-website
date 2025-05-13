
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site vitrine C'EST DANS LA BOÎTE",
    category: "Site Vitrine",
    image: "lovable-uploads/CDLB - logo.png",
    link: "https://cestdanslaboite.pro/",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express"]
  },
  {
    id: 2,
    title: "Site vitrine YADAQ",
    category: "Site Vitrine",
    image: "lovable-uploads/Blanc et Cercle Rouge Art Logo.jpg",
    link: "https://www.yadaq.com/",
    technologies: ["React", "Next.js", "Styled Components", "MongoDB"]
  },
  {
    id: 3,
    title: "Plateforme de formation EASE GROWTH Formation",
    category: "En cours",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#",
    technologies: ["React", "Firebase", "Redux", "Material UI"]
  },
  {
    id: 4,
    title: "Site E-Commerce SANKHINY ",
    category: "En cours",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: "#",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"]
  },
  {
    id: 5,
    title: "Site Vitrine l'OR ET l'ÉLÉGANCE",
    category: "En cours",
    image: "lovable-uploads/loretlelegance.jpg",
    link: "#",
    technologies: ["WordPress", "Elementor", "PHP", "CSS"]
  }
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full mb-3">
            NOTRE PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projets réalisés avec passion
          </h2>
          <p className="text-gray-600">
            Découvrez quelques-unes de nos réalisations récentes qui ont permis à nos clients d'atteindre leurs objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              to={project.link}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                    <span>Voir le projet</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
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
